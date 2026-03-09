$envVars = @{
    "MONGODB_URI" = "mongodb+srv://blueraysdata_db_user:WBzzUtxxTksLO9u6@cluster0.7k41sim.mongodb.net/bluerays_db?retryWrites=true&w=majority&ssl=true&authSource=admin"
    "MONGODB_DB" = "bluerays_db"
    "RESEND_API_KEY" = "re_GZ8DrCT9_ATacSd16zfgQKATtuR197rqC"
    "CONTACT_EMAIL" = "blueraysdata@gmail.com"
}

foreach ($node in $envVars.GetEnumerator()) {
    $name = $node.Key
    $value = $node.Value
    Write-Host "Adding $name..."
    echo $value | npx vercel env add $name production
}
