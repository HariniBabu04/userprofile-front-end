document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Profile details
            document.getElementById('profile-pic').src = data.profilePic;
            document.getElementById('username').textContent = data.username;
            document.getElementById('bio').textContent = data.bio;
            document.getElementById('posts').textContent = data.posts.length;
            document.getElementById('followers').textContent = data.followers.length;
            document.getElementById('following').textContent = data.following.length;
            document.getElementById('name').textContent = data.name;
            document.getElementById('location').textContent = data.location;
            document.getElementById('joined').textContent = data.joined;
            document.getElementById('website').textContent = data.website;
            document.getElementById('website').href = data.website;
            document.getElementById('email').textContent = data.email;

            // Posts
            const postsList = document.getElementById('posts-list');
            data.posts.forEach(post => {
                const div = document.createElement('div');
                div.className = 'post-item';
                div.innerHTML = `
                    <img src="${post.image}" alt="Post Image">
                    <p>${post.content} <br><small>${post.date}</small></p>
                `;
                postsList.appendChild(div);
            });

            // Followers
            const followersList = document.getElementById('followers-list');
            data.followers.forEach(follower => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${follower.avatar}" alt="${follower.name}">
                    <span>${follower.name} (@${follower.username})</span>
                `;
                followersList.appendChild(li);
            });

            // Following
            const followingList = document.getElementById('following-list');
            data.following.forEach(following => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${following.avatar}" alt="${following.name}">
                    <span>${following.name} (@${following.username})</span>
                `;
                followingList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading user data:', error));

    document.getElementById('follow-btn').addEventListener('click', () => {
        alert('Follow button clicked! Follow functionality can be implemented here.');
    });

    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.sidebar ul li a.active').classList.remove('active');
            link.classList.add('active');
            alert(`${link.textContent} clicked! Implement navigation here.`);
        });
    });
});