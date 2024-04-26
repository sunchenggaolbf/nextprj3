import MyButton from "@/components/MyButton";


export default function Page(){
    const handleClick = ()=>{
        alert("aaa");
    }

    return (
        <>
        <h1>可以在这里畅所欲言</h1>
        <MyButton>this is test for my custom button</MyButton>
        </>
    );
}