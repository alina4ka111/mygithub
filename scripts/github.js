class GitHub {
    constructor(){
        this.client_id = '3b865f23015dc172aff0';
        this.client_secret = 'e99fd7d0fffe74c3c607aaa7cf53a45109b236fc';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.user = 'alina4ka111';
    }
    async getUserData(){
        let urlProfile = `https://api.github.com/users/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos = "https://api.github.com/users/" + this.user + "/repos?per_page=" + this.repos_count + "&sort=" + this.repos_sort + "&client_id=" + this.client_id + "&client_secret=" + this.client_secret;

        const profileResponse = await fetch(urlProfile);
        const reposReponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposReponse.json();
        
        return {
            profile,
            repos
        }
    }
}