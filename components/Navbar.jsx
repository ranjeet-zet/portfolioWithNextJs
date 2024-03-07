import   './Navbar.css'
const Navbar=()=>{
    const data=[
        {name:"Home",link:"#"},
        {name:"About ",link:"#about"},
        {name:"Tech Skills",link:"#techskill"},
        {name:"Project",link:"#projects"},
        {name:"Contact",link:"#contact"},
    ]
    return (
        <div className='navbar'>
            <div>
                <p className='navebartitel'>RANJEET</p>
            </div>
            <div className="navbarsecounddiv">
                {data.map((ele,i)=>{
                    return <a   key={i} href={ele.link}>{ele.name}</a>
                })}
            </div>
            
        </div>

    )
}
export default Navbar