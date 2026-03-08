'use client';

import React, { useState, useEffect } from 'react';
import {
    Users,
    MessageSquare,
    Clock,
    CheckCircle,
    XCircle,
    Search,
    RefreshCw,
    Eye,
    Phone,
    Mail,
    Calendar,
    ChevronDown,
    Filter,
    Download,
    MoreVertical,
    ArrowRight
} from 'lucide-react';

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    status: 'new' | 'contacted' | 'closed';
    createdAt: string;
}

export default function AdminDashboard() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    const fetchContacts = async () => {
        setRefreshing(true);
        try {
            const response = await fetch('/api/contact');
            const data = await response.json();
            if (data.success) {
                setContacts(data.data);
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus }),
            });
            const data = await response.json();
            if (data.success) {
                setContacts(contacts.map(c => c._id === id ? { ...c, status: newStatus as any } : c));
                if (selectedContact?._id === id) {
                    setSelectedContact({ ...selectedContact, status: newStatus as any });
                }
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const filteredContacts = contacts.filter(contact => {
        const matchesFilter = filter === 'all' || contact.status === filter;
        const matchesSearch =
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.message.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const stats = {
        total: contacts.length,
        new: contacts.filter(c => c.status === 'new').length,
        contacted: contacts.filter(c => c.status === 'contacted').length,
        closed: contacts.filter(c => c.status === 'closed').length,
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'contacted': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'closed': return 'bg-green-100 text-green-700 border-green-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Sidebar - Desktop */}
            <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 hidden lg:block z-20">
                <div className="p-6">
                    <div className="flex items-center space-x-3 mb-10 pb-6 border-b border-slate-100">
                        <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                            <Users className="text-white" size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-slate-800 leading-none">Blue Rays</span>
                            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1">Admin Panel</span>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium">
                            <Users size={20} />
                            <span>Inquiries</span>
                        </a>
                        <a href="/" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-all group">
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            <span className="font-medium">View Website</span>
                        </a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:ml-64 p-4 md:p-8 transition-all duration-300">
                <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Lead Management</h1>
                        <p className="text-slate-500 mt-1">Manage and track your solar inquiries.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={fetchContacts}
                            disabled={refreshing}
                            className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center space-x-2"
                        >
                            <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
                            <span className="hidden sm:inline">Refresh</span>
                        </button>
                        <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-all flex items-center space-x-2">
                            <Download size={18} />
                            <span>Export CSV</span>
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        title="Total Leads"
                        value={stats.total.toString()}
                        icon={<Users className="text-blue-600" size={24} />}
                        color="blue"
                    />
                    <StatCard
                        title="New Inquiries"
                        value={stats.new.toString()}
                        icon={<MessageSquare className="text-indigo-600" size={24} />}
                        color="indigo"
                    />
                    <StatCard
                        title="Contacted"
                        value={stats.contacted.toString()}
                        icon={<Clock className="text-amber-600" size={24} />}
                        color="amber"
                    />
                    <StatCard
                        title="Closed Deals"
                        value={stats.closed.toString()}
                        icon={<CheckCircle className="text-emerald-600" size={24} />}
                        color="emerald"
                    />
                </div>

                {/* Controls */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between shadow-sm">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, email or message..."
                            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center space-x-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                            <FilterTab active={filter === 'all'} label="All" onClick={() => setFilter('all')} />
                            <FilterTab active={filter === 'new'} label="New" onClick={() => setFilter('new')} />
                            <FilterTab active={filter === 'contacted'} label="Active" onClick={() => setFilter('contacted')} />
                            <FilterTab active={filter === 'closed'} label="Closed" onClick={() => setFilter('closed')} />
                        </div>
                    </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Message Preview</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan={5} className="px-6 py-8 h-16 bg-slate-50/20"></td>
                                        </tr>
                                    ))
                                ) : filteredContacts.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center justify-center opacity-40">
                                                <Search size={48} className="mb-4" />
                                                <p className="text-xl font-medium">No inquiries found</p>
                                                <p className="text-sm">Try adjusting your filters or search query</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredContacts.map((contact) => (
                                        <tr key={contact._id} className="hover:bg-slate-50/80 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200">
                                                        {contact.name.charAt(0)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-bold text-slate-800">{contact.name}</div>
                                                        <div className="text-xs text-slate-500">{contact.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-slate-600 line-clamp-1 max-w-xs">{contact.message}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-xs text-slate-500 flex items-center">
                                                    <Calendar size={12} className="mr-1.5 opacity-60" />
                                                    {new Date(contact.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusColor(contact.status)}`}>
                                                    {contact.status.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <button
                                                        onClick={() => setSelectedContact(contact)}
                                                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    <div className="relative group/menu">
                                                        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                                                            <MoreVertical size={18} />
                                                        </button>
                                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 hidden group-focus-within/menu:block z-30">
                                                            <div className="p-2 space-y-1">
                                                                <button onClick={() => updateStatus(contact._id, 'new')} className="w-full px-3 py-2 text-left text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-all flex items-center"><Clock size={14} className="mr-2" /> Mark as New</button>
                                                                <button onClick={() => updateStatus(contact._id, 'contacted')} className="w-full px-3 py-2 text-left text-sm text-amber-600 hover:bg-amber-50 rounded-lg transition-all flex items-center"><RefreshCw size={14} className="mr-2" /> Mark Contacted</button>
                                                                <button onClick={() => updateStatus(contact._id, 'closed')} className="w-full px-3 py-2 text-left text-sm text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all flex items-center"><CheckCircle size={14} className="mr-2" /> Mark Closed</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
                        <p className="text-xs text-slate-500 font-medium italic">Showing {filteredContacts.length} total inquiries</p>
                        <div className="flex space-x-2">
                            {/* Pagination would go here */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            {selectedContact && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-200">
                        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h2 className="text-xl font-bold text-slate-800">Inquiry Details</h2>
                            <button onClick={() => setSelectedContact(null)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-full transition-all">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
                                <div className="h-20 w-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl font-extrabold border border-blue-100 shrink-0">
                                    {selectedContact.name.charAt(0)}
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">{selectedContact.name}</h3>
                                        <div className="flex flex-wrap gap-4 mt-2">
                                            <div className="flex items-center text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                                <Mail size={14} className="mr-2 opacity-70" />
                                                <span className="text-sm font-medium">{selectedContact.email}</span>
                                            </div>
                                            <div className="flex items-center text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                                <Phone size={14} className="mr-2 opacity-70" />
                                                <span className="text-sm font-medium">{selectedContact.phone || 'N/A'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Current Status</span>
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(selectedContact.status)}`}>
                                            {selectedContact.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Message Content</label>
                                <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 text-slate-700 leading-relaxed max-h-60 overflow-y-auto">
                                    {selectedContact.message}
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col md:flex-row gap-3">
                                <button
                                    onClick={() => updateStatus(selectedContact._id, 'contacted')}
                                    className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center"
                                >
                                    <RefreshCw size={18} className="mr-2" /> Mark as Contacted
                                </button>
                                <button
                                    onClick={() => updateStatus(selectedContact._id, 'closed')}
                                    className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center"
                                >
                                    <CheckCircle size={18} className="mr-2" /> Close Lead
                                </button>
                            </div>
                        </div>

                        <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center">
                            <p className="text-xs text-slate-400 font-medium">Inquiry received on {new Date(selectedContact.createdAt).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function StatCard({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: string }) {
    const colorMap: any = {
        blue: 'bg-blue-50 border-blue-100 shadow-blue-100/20',
        indigo: 'bg-indigo-50 border-indigo-100 shadow-indigo-100/20',
        amber: 'bg-amber-50 border-amber-100 shadow-amber-100/20',
        emerald: 'bg-emerald-50 border-emerald-100 shadow-emerald-100/20',
    };

    return (
        <div className={`p-6 rounded-2xl border bg-white shadow-xl shadow-slate-100/40 relative overflow-hidden group transition-all hover:-translate-y-1`}>
            <div className={`absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full ${colorMap[color]} group-hover:scale-125 transition-transform duration-500 opacity-50`}></div>
            <div className="flex items-center justify-between relative z-10">
                <div className="space-y-1">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
                    <h3 className="text-4xl font-black text-slate-800 tracking-tight leading-none">{value}</h3>
                </div>
                <div className={`h-14 w-14 rounded-2xl ${colorMap[color]} border flex items-center justify-center shrink-0`}>
                    {icon}
                </div>
            </div>
        </div>
    );
}

function FilterTab({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${active
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
                }`}
        >
            {label}
        </button>
    );
}
