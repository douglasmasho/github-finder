class Github{
    constructor(){
        this.client_id = "6d94c66e3a1fd6305013";
        this.clent_secret = "a05086d4f7ef5cc7a571ef319d38f0e905dc52cf";
        this.repos_count = 5;
        this.repos_sort = "created: asc"
    }

     async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return {
            profile : profile,
            repos: repos
        }
    } 
}

