// Configuration for the GitHub Data Reader
// Update these values to point to your desired public repository
const GITHUB_CONFIG = {
    owner: 'yblebon', 
    repo: 'datasources',
    // Path should point to the directory containing your JSON files (empty string for root)
    path: 'tickers' 
};

// Exporting the config object so it can be imported by the main script
export default GITHUB_CONFIG;