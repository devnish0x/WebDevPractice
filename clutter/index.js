import fs from "fs/promises"
import fss from "fs"
import path from "path"

let dirr = "C:\\Users\\nisha\\webdev\\clutter"

const files = await fs.readdir(dirr)
console.log(files)

for (const file of files) {
    const e = path.extname(file)
    const ext = e.slice(1)
    
    if (ext !="json" && ext != "js"){
        if(fss.existsSync(path.join(dirr,ext))){
            fs.rename(path.join(dirr,file),path.join(dirr,ext,file))   
        }
        else{
            fs.mkdir(path.join(dirr,ext))
            fs.rename(path.join(dirr,file),path.join(dirr,ext,file))  
        }

    }
}