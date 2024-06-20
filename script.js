window.addEventListener("load", () =>{
    const input=document.getElementById("upload");
    const filewrapper=document.getElementById("filewrapper");

    input.addEventListener("change",(e) => {
        let fileName=e.target.files[0].name;
        let filetype=e.target.value.split(".").pop();
        fileshow(fileName,filetype);

    });

    const fileshow=(fileName,filetype) => {
        const showfieldboxElem=document.createElement("div");
        showfieldboxElem.classList.add("showfilebox");

        const leftElem=document.createElement("div");
        leftElem.classList.add("left");

        const filetypeElem=document.createElement("span");
        filetypeElem.classList.add("filetype");
        filetypeElem.innerHTML=filetype;
        leftElem.append(filetypeElem);

        const filetitleElem=document.createElement("h3");
        filetitleElem.innerHTML=fileName;
        leftElem.append(filetitleElem);
        showfieldboxElem.append(leftElem);

        const rightElem=document.createElement("div");
        rightElem.classList.add("right");
        showfieldboxElem.append(rightElem);

        const crossElem=document.createElement("span");
        crossElem.innerHTML="&#215;";
        rightElem.append(crossElem);
        filewrapper.append(showfieldboxElem);

        crossElem.addEventListener("click" , () => {
            filewrapper.removeChild(showfieldboxElem);

        });

    }

});