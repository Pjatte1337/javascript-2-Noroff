export function generateFooter(){

    const pageFooter = document.querySelector("footer");

    pageFooter.innerHTML = `
    <div class="container-fluid d-flex justify-content-center bg-theme-bg-sec p-3">
     <div>
        <p>Copyright Christopher Tønnesland & Joakim Vanebo 2022</p>
     </div>   
    </div>
    `
};