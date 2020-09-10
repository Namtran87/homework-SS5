import { BaseComponent } from "./BaseComponent.js";
class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            memes: [
                { "name": "đi học", "image": 'https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg', 'description': 'đi học', "date-modified": "2020/09/07" },
                { "name": "đi chơi với crush", "image": 'https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg', 'description': 'đi chơi', "date-modified": "2020/09/07" },
                { "name": "đi chơi với bạn thân", "image": 'https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg', 'description': 'đi chơi', "date-modified": "2020/09/07" },
                { "name": "đi ăn quán", "image": 'https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg', 'description': 'đi ăn', "date-modified": "2020/09/07" }
            ]
        };
    }

    render() {
        let html = "";
        for (let meme of this.state.memes) {
            html += `<meme-container name="${meme.name}" image="${meme.image}" description="${meme.description}" date-modified="${meme["date-modified"]}"></meme-container>`
        }
        this._shadowRoot.innerHTML = `
        <div class = "list">
        <form id = "form-add-meme">
        <textarea name = "name" placeholder = "Enter content here"></textarea><br>
        <textarea name = "image" placeholder = "Enter content here"></textarea><br>
        <textarea name = "description" placeholder = "Enter description"></textarea><br>
        <input type = "datetime-local" name="dateModified" placeholder = "Date Modified"><br>
        <button>Add Meme</button>
        </form>
        ${html}
        </div>
        `;
        // let firstTask = this.state.tasks[0];
        // let secondTask = this.state.tasks[1];
        // this._shadowRoot.innerHTML = `
        // <div class="list">
        //     <task-container content="${firstTask.content}" is-completed="${firstTask["is-completed"]}" date-modified="${firstTask["date-modified"]}"></task-container>
        //     <task-container content="${firstTask.content}" is-completed="${firstTask["is-completed"]}" date-modified="${firstTask["date-modified"]}"></task-container>
        //     <task-container content="${firstTask.content}" is-completed="${firstTask["is-completed"]}" date-modified="${firstTask["date-modified"]}"></task-container>
        //     <task-container content="${firstTask.content}" is-completed="${firstTask["is-completed"]}" date-modified="${firstTask["date-modified"]}"></task-container>
        // </div>`;

        this.$formAddMeme = this._shadowRoot.getElementById("form-add-meme");
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                "name": this.$formAddMeme.name.value,
                "image": this.$formAddMeme.image.value,
                "description": this.$formAddMeme.description.value,
                "date-modified": this.$formAddMeme.dateModified.value
            };
            this.state.tasks.push(newMeme);
            // this.render();
            // this.componentDidUpdate();

            //         // this.setState({
            // tasks:[
            //     ...this.state.tasks,
            //     newTask
            // ]
            //         // })
            let $meme = document.createElement('meme-container');
            $meme.setAttribute('name', newMeme.name);
            $meme.setAttribute('image', newMeme.image);
            $meme.setAttribute('description', newMeme.description);
            $meme.setAttribute('date-modified', newTask["date-modified"]);

            this.$list = this._shadowRoot.querySelector('.list');
            this.$list.appendChild($meme);
            console.log("đã thêm meme");
        }
    }
}

window.customElements.define('list-container', List);