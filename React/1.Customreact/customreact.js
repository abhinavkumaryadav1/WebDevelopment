function customRender(reactElement,Container)
{
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // Container.appendChild(domElement)

     const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children 
     for(const prop in reactElement.props)
     {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     Container.appendChild(domElement)
}  
 // the above code is commented because of DRY principle since props can have multiple props and we cannot code for each one again and agian

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },

    children: 'click me to visit google'
}
const mainContainer=document.getElementById('root')

customRender(reactElement,mainContainer)