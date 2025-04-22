import './style.css'
import './presentation/web/components'

document.querySelector<HTMLDivElement>( '#app' )!.innerHTML = `
  <div>
    <h1> 🐈 Pxndxs UI 🐼 </h1>
    <date-picker id="date-1"></date-picker>
    <date-picker id="date-2"></date-picker>
  </div>
`
