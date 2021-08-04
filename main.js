// console.log('executed')

const enterText = document.getElementById('searchuser')
const button = document.getElementById('button')


button.addEventListener('click', () => {

    this.document.getElementById("front-image").style.display = "none";

    const username = enterText.value

    const xhr = new XMLHttpRequest()
    const url = `https://api.github.com/users/${username}`
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText)
            const response = JSON.parse(xhr.responseText)
            console.log(response)

            const image = document.createElement('img')
            image.src = response.avatar_url
            console.log(image)

            const name = document.createElement('li')
            name.textContent = `Name :- ` + `${response.name}`
            name.style.fontFamily = 'Lora', 'serif';
            const username = document.createElement('li')
            username.textContent = `GitHub Username :- ` + `${response.login}`
            username.style.fontFamily = 'Lora', 'serif';
            const html_url = document.createElement('li')
            html_url.textContent = `GitHub url:- ` + `${response.html_url}`
            html_url.style.fontFamily = 'Lora', 'serif';
            const id = document.createElement('li')
            id.textContent = `GitHub id:- ` + `${response.id}`
            id.style.fontFamily = 'Lora', 'serif';
            const location = document.createElement('li')
            location.textContent = `Location :- ` + `${response.location}`
            location.style.fontFamily = 'Lora', 'serif';
            const email = document.createElement('li')
            email.textContent = `Email Address :- ` + `${response.email}`
            email.style.fontFamily = 'Lora', 'serif';
            const publicRepo = document.createElement('li')
            publicRepo.textContent = `Repositories :- ` + `${response.public_repos}`
            publicRepo.style.fontFamily = 'Lora', 'serif';
            const bio = document.createElement('li')
            bio.textContent = `Bio :- ` + `${response.bio}`
            bio.style.fontFamily = 'Lora', 'serif';
            const followers = document.createElement('li')
            followers.textContent = `Followers :- ` + `${response.followers}`
            followers.style.fontFamily = 'Lora', 'serif';
            const following = document.createElement('li')
            following.textContent = `Following :- ` + `${response.following}`
            following.style.fontFamily = 'Lora', 'serif';
            const company = document.createElement('li')
            company.textContent = `Company :- ` + `${response.company}`
            company.style.fontFamily = 'Lora', 'serif';



            const list = document.getElementById('details')
            list.appendChild(name)
            list.appendChild(username)
            list.appendChild(html_url)
            list.appendChild(id)

            list.appendChild(location)
            list.appendChild(email)
            list.appendChild(company)
            list.appendChild(publicRepo)
            list.appendChild(followers)
            list.appendChild(following)
            list.appendChild(bio)

            const box = document.getElementById('container')
            box.appendChild(image)

        } else if (xhr.status === 404) {
            alert(`No result found for ${enterText.value}`)
            enterText.value = ""
            this.document.getElementById('front-image').style.display = "inline";
        }
    }
    xhr.send()
})

