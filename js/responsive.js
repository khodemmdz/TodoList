function responsiveMobile() {
    if (window.innerWidth <= 970) {
        $.body.innerHTML = `
        <div class="terminal-loader">
            <div class="terminal-header">
                <div class="terminal-title">Status</div>
                <div class="terminal-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
                </div>
            </div>
            <div class="content">
                <div class="text">Currently not available for mobile phones!</div>
            </div>
        </div>
        `
    } else {
        $.body.innerHTML = `
        <!-- aside left -->
        <aside>
            <div class="shine">TodoManager</div>

            <button id="ojfhrdvk" class="ClearAllTodo">Clear All</button>
        </aside>

        <!-- list Todos -->
        <div class="todoAdd">
            <h2>
                <div class="hrleft"></div>

                Todos
            </h2>

            <!-- card Todos -->
            <div id="todoCards" class="todoCards">

            </div>
        </div>

        <div class="hr"></div>

        <!-- Form Add Todo -->
        <div class="notes">

            <div id="formAddTodo" class="formAddTodo">
                <input maxlength="20" type="text" class="titleTodo" id="titleTodos" placeholder="... name note">
                
                <textarea name="note" class="cardNote" id="captionsTodo" placeholder="...TypedNote" maxlength="91"></textarea>
                
                <button id="addTodoBtn" class="addTodoBtn"></button>
            </div>

        </div>


        <!-- script -->
        <script src="js/script.js"></script>
        <script src="js/addTodoBtn.js"></script>
        <script src="js/responsive.js"></script>
        `
    }
}

responsiveMobile()

window.addEventListener('resize', responsiveMobile)