const template = document.createElement("template");
template.innerHTML = `
<head>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  #1d2636;
}

a {
  color: #dbdbdb;
  font-size: 15px;
  display: inline-block;
  padding: 22px 15px;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
    color: #fff;
}

.logo {
    font-family: 'Kaushan Script', cursive;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    padding: 15px;
}

.active {
    background: #3b475c;
}

.right {
    display: flex;
    align-items: center;
}

.dropdown-container {
    position: relative;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dropdown {
    background: #fff;
    position: absolute;
    right: 0;
    top: 63px;
    box-shadow: 0px 6px 12px -6px rgba(0,0,0,0.65);
    display: none;
}

ul {
    padding: 20px 5px;
    margin: 0;
}

.dropdown li {
    list-style: none;
    border-bottom: solid 1px #f0f0f0;
}

li:hover {
    background: #f5f5f5;
}

li a {
    padding: 10px 15px;
    font-size: 16px;
    color: gray;
}

i {
    margin-right: 5px;
}

li a:hover {
    color: gray;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: #e3a410;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
}

</style>
<header>
    <nav>
        <div class="right">
            <a class="logo" href="index.html">eventorgan</a>
            <div>
                <a href="index.html" id="events">Events</a>
                <a href="orders.html" id="orders">Orders</a>
            </div>
        </div>
        <div class="dropdown-container active">
            <div class="avatar">
                <p>J</p>
            </div>
            <a>Jorka</a>
        </div>
        <div class="dropdown">
            <ul>
                <li><a><i class="fa fa-cog" aria-hidden="true"></i> Account Settings</a></li>
                <li><a><i class="fa fa-sign-out" aria-hidden="true"></i> Log out</a></li>
            </ul>
        </div>
    </nav>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();

    const el = template.content.querySelector(`#${this.getAttribute("data-current")}`);
    el.classList.add("active");
    const dropdown = template.content.querySelector(".dropdown")
    template.content.querySelector(".dropdown-container").addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
    })

    dropdown.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
    })
  }

  connectedCallback() {
    const root = this.attachShadow({ mode: "closed" });
    root.appendChild(template.content);
  }
}

customElements.define("header-component", Header);

export default Header;
