class GitHub{
    constructor(){
        this.clientId = 'ebebdc1e0e285a28dca4';
        this.clientSecret = 'f6f3b075923e49990bca8df7c92a866701f8fb58';
        this.reposCount = 5;
        this.reposSort = 'created:asc' 
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId = ${this.clientId}&clienSecret =${this.clientSecret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page =${this.reposCount}&sort=${this.reposSort}&clientId = ${this.clientId}&clienSecret =${this.clientSecret}`)
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()
        return {
            profile,
            repos
        }

    }
}