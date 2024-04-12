require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "rohitarora156",
  "id": 113324608,
  "node_id": "U_kgDOBsEyQA",
  "avatar_url": "https://avatars.githubusercontent.com/u/113324608?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rohitarora156",
  "html_url": "https://github.com/rohitarora156",
  "followers_url": "https://api.github.com/users/rohitarora156/followers",
  "following_url": "https://api.github.com/users/rohitarora156/following{/other_user}",
  "gists_url": "https://api.github.com/users/rohitarora156/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rohitarora156/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rohitarora156/subscriptions",
  "organizations_url": "https://api.github.com/users/rohitarora156/orgs",
  "repos_url": "https://api.github.com/users/rohitarora156/repos",
  "events_url": "https://api.github.com/users/rohitarora156/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rohitarora156/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-09-12T03:24:37Z",
  "updated_at": "2024-02-29T15:51:48Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('rohitarora')
})

app.get('/login',(req,res) =>{
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
  res.send('<h2>we are live at youtube</h2>')
})

app.get('/github', (req,res)=> {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})