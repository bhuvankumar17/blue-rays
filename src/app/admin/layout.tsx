import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Panel | Blue Rays Green Energy",
    description: "Lead management and inquiry tracking for Blue Rays Green Energy solar solutions.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
