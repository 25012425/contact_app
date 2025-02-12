// 검색어 없이, 조회 버튼 누를때.
const read_form =document.querySelector("#read_fom");
const saver_url ="http://localhost:3000/contactsment.querySelector("#read_fom");
let items 



async function logJSONData() {
    const response = await fetch("http://example.com/movies.json");
    const jsonData = await response.json();
    // console.log(jsonData);
    for(let data of jsonData){
        items+=`
        <li class="box">
     <div class="photo">
     <img src="https://picsum.photos/200" alt="profile_image">
     imgs src="image/{data.gender.}
     figma src="image/
</div>
<div class="photo">
        <div>이름 :${data name}</div>
        <div>전화번호 :${data mobail}</div>
        <div>메모 :${data memo}</div>
        <div>하는일 :${data job}</div>
    </div>
    <div>
    </div>
    </li>
    `;
    }
  }
  
X-2text-center">
