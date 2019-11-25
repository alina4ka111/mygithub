const gitHub = new GitHub;
const ui = new UI;

gitHub.getUserData()
.then(data => {
    ui.showProfile(data.profile);
});