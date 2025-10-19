body {
    background-color: #d0d9cd;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

img {
    max-width: 100%;
    vertical-align: middle;
    height: auto;
}

.grid {
    position: relative;
    transform: translateY(125px);
    column-count: 4;
    column-gap: 0.5em;
    padding-bottom: 1.25em;
    margin: 1.25em; /* first number applies to top/bottom second number applies to left/right */
    height: auto;
    z-index: 0;
}

.grid .grid-item {
    margin-bottom: 0.5em;
}

.grid-item img:hover {
    cursor: pointer;
}

@media (max-width:1024px) {
    .grid {
        column-count: 3;
    }
    .bottom-section {
        height: 200px;
    }
}
@media (max-width:728px) {
    .grid {
        column-count: 2;
    }
    .bottom-section {
        height: 150px;
    }
}
@media (max-width:576px) {
    .grid {
        column-count: 1;
    }
    .bottom-section {
        height: 100px;
    }
}

/* image fading  */
.fade-on-scroll {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}

.fade-out{
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-in{
    opacity: 1;
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.index-header {
    display: flex;
    align-items: center;
    background-color: #a9ba9d;
    height: 125px;
    width: 100vw;
    position: fixed;
    top: 0;
}

h1 {
    color: #687169;
    transform: translateY(20px) translateX(20px);
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 30px;
    margin: 0;
}
h2 {
    transform: translateY(23px) translateX(50px);
    color: #687169;
    font-family: "Libre Baskerville", serif;
    font-size: 20px;
    font-weight: 700;
}
h3 {
    transform: translateY(23px) translateX(75px);
    color: #687169;
    font-family: "Libre Baskerville", serif;
    font-size: 20px;
    font-weight: 700;
}
h4 {
    transform: translateY(23px) translateX(100px);
    color: #687169;
    font-family: "Libre Baskerville", serif;
    font-size: 20px;
    font-weight: 700;
}
a {
    text-decoration: none;
}

button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
}

.bottom-section {
    background-color: #a9ba9d;
    height: 300px;
    width: 100vw;
    transform: translateY(100px);
}

.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.lightbox {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
}
.lightbox-img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.lightbox-img img {
    width: 70vw;
    height: auto;
}
.right-arrow { 
    position: fixed;
    transform: scale(3);
    top: 50%;
    right: 2.5%;
    color: white;
}
.right-arrow:hover {
    cursor: pointer;
}
.left-arrow {
    position: fixed;
    transform: scale(3);
    top: 50%;
    left: 2.5%;
    color: white;
}
.left-arrow:hover {
    cursor: pointer;
}
