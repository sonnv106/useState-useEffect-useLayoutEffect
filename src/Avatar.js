import { useEffect, useState } from "react";

const Avatar = () => {
  const [avatar, setAvatar] = useState();
  useEffect(()=>{
    return ()=>{
        avatar && URL.revokeObjectURL(avatar.preview)
        console.log('clean up')
    }
  },[avatar])
  const chooseImage = (e)=>{
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    console.log(URL.createObjectURL(file))
    setAvatar(file)
}
  return (
    <div>
      <input type="file" onChange={chooseImage}/>
      {avatar && <img src= {avatar.preview} width={100} alt="Error load image" />}
    </div>
  );
};
export default Avatar;
