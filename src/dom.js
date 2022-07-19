window.dom = {
    create(string){
        const container = document.createElement("template");
        container.innerHTML = string;
        return container.content.firstChild;
     },
    find(selector,scope){
        return (scope||document).querySelectorAll(selector)
        },
    style(node,name,value){
            if(arguments.length===3){
                //dom.style(div,'color','red')增或改属性
                node.style[name]=value
            }else if(arguments.length===2){
                if(typeof name ==='string'){
                    //dom.style(div,'color')查属性
                    return node.style[name]
                }else if(name instanceof Object){
                    //dom.style(div,{color:'red'})增或改属性
                    const Object =name
                    for(let key in Object){
                        //key:border/color
                        //node.style.border=
                        //node.style.color=
                        node.style[key]=Object[key]
                }
            }
            }
        },
        each(nodeList,fn){
            for(let i=0;i<nodeList.length;i++){
                fn.call(null,nodeList[i])
            }
        },
}