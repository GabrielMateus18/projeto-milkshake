const url='https://br.pinterest.com/'
const btn= document.querySelector('#btn')
function openInNewTab(url){
    const win=window.open(url, '_blank')
    win.focus()
}
btn addEventListener('click', ()=>{
    openInNewTab(url)
})