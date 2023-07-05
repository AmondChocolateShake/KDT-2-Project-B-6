



// function makeDefaultWeaponFile(){
//   const mysql=require('mysql');
//   const fs=require('fs');
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'Tarkov_Moding',
//   });

//   const sql='SELECT id,name FROM DefaultWeapon'


//   connection.query(sql,null,(err:Error,result:any)=>{
//     if(err){
      
//     }else{
      
//       const parseData=JSON.stringify(result);
//       fs.writeFileSync('defaultWeapon.json', parseData, (err:Error) => {
//         if (err) {
//           console.error('Error writing to file:', err);
//         } else {
//           console.log('File written successfully.');
//         }});
//       }
//     })
  
// }

// makeDefaultWeaponFile();

// async function addRecoil(){
//   const mysql=require('mysql');
//   const fs=require('fs');
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'Tarkov_Moding',
//   });

//   const weaponData=fs.readFileSync('defaultWeapon.json','utf-8');
//   const itemData=fs.readFileSync('items.json','utf-8');

//   const parsedWeapon=JSON.parse(weaponData);
//   const parsedItem=JSON.parse(itemData);

//   let arr=[]

//   for(let weapon of parsedWeapon){
//     for(let item of parsedItem){
//       if(weapon['id']===item['id']){
//         for(let mod of item['modSlots']){
//           // console.log(mod);
//           let obj={
//             id:item['id'],
//             modSlot:mod
//           }
//           arr.push(obj);
//         }
//       }
//     }
//   }

//   // console.log(arr);

//   for(let item of arr){
//     // console.log(item);
//     for(let data of item['modSlot'].compatibleItemIds)
//     {
//       // console.log(item['id']);
//       // console.log(item['modSlot'].name);
//       // console.log(data);
//       await insertDataIntoModSlotList(item['id'],item['modSlot'].name,data);
//     }

//   }
//   // insertDataIntoModSlotList('1','1','1');
//   console.log('end')
// }


// async function insertDataIntoModSlotList(id:string,modName:string,compatibleItemIds:string){
//   return new Promise((resolve,reject)=>{
//     const mysql=require('mysql');
//     const connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: '1234',
//       database: 'Tarkov_Moding',
//     });

//     const query='INSERT INTO modSlotList (id,modName,compatibleItemIds) VALUES ( ? , ? , ? )'
//     connection.query(query,[id,modName,compatibleItemIds],(err:Error,results:any)=>{
//       if(err){
//         console.error(err);
//         reject(err)
//       }else{
//         resolve(results);
//         console.log('successed : '+results);
//         connection.end()
//       }
//     })
//   })
// }









// const fs=require('fs');


// //총 이름을 담는 배열
// let GunList=[''];
// let GunIds=[0];
// let categories=[''];
// let itemList=[{}];

// function addItemIntoList(item:object){
//   itemList.push(item);
// }


// interface Gun{
//   name:string,
//   id:string,
//   category:string,
// }

// let Guns:Gun[]=[{
//   name:'',
//   id:'',
//   category:''
// }]
// interface Item3{
//   categoryId:string,
//   id:string,
//   shortName:string,
//   name:string|null,
//   color:string|null,
//   iconLink:string|null,
//   imageLink:string|null,
//   value:{
//     value:number,
//     currencyName:string,
//   }|null,
//   conflictingItemIds:string[]|null,
//   ability:{
//     caliber:string|null
//     fireRate:number|null,
//     ergonomics:number|null,
//     verticalRecoil:number|null,
//     horizontalRecoil:number|null,
//     accuracyPercentageModifier:number|null,
//     capacity:number|null,
//     loadSpeedPercentageModifier:number|null,
//     checkSpeedPercentageModifier:number|null,
//     fleshDamage:number|null,
//     penetrationPower:number|null,
//     class:number[]|null,
//     fragmentationChancePercentage:number|null
//   },
//   modSlots:{
//     name:string,
//     compatibleItemIds:string[],
//   }[]|null
// }

// interface Item2{
//   [key: string]: any,
//   categoryId:string,
//   id:string,
//   shortName:string,
//   name:string|null,
//   iconLink:string|null,
//   imageLink:string|undefined,
//   value:{
//     value:number,
//     currencyName:string,
//   }|null,
//   conflictingItemIds:string[]|null,
//   caliber:string|null
//   fireRate:number|null,
//   ergonomics:number|null,
//   verticalRecoil:number|null,
//   horizontalRecoil:number|null,
//   accuracyPercentageModifier:number|null,
//   capacity:number|null,
//   loadSpeedPercentageModifier:number|null,
//   checkSpeedPercentageModifier:number|null,
//   fleshDamage:number|null,
//   penetrationPower:number|null,
//   class:number[]|null,
//   fragmentationChancePercentage:number|null
  
//   modSlots:{
//     name:string,
//     compatibleItemIds:string[]
//   }[]|null
// }


// let items:Item2={
//   categoryId:'',
//   id:'',
//   shortName:'',
//   name:'',
//   iconLink:'',
//   imageLink:'',
//   value:{
//     value:0,
//     currencyName:''
//   },
//   conflictingItemIds:[],
//   caliber:'',
//   fireRate:0,
//   ergonomics:0,
//   verticalRecoil:0,
//   horizontalRecoil:0,
//   accuracyPercentageModifier:0,
//   capacity:0,
//   loadSpeedPercentageModifier:0,
//   checkSpeedPercentageModifier:0,
//   fleshDamage:0,
//   penetrationPower:0,
//   class:[],
//   fragmentationChancePercentage:0,
//   modSlots:[{
//     name:'',
//     compatibleItemIds:[]
//   }]
// };


// //3개의 값을 Guns배열에 객체로 삽입하는 함수
// function addGunData(name:string,id:string,category:string){
//   Guns.push({name:name,id:id,category:category})
// }



// //아이템 객체에 동일한 키가 있는지 비교하는 함수
// function checkPropInObj(prop:any){
//   if(prop in items){
//     return true
//   }else return false

// }

// function pushPropIntoObj(obj:any,prop:any){
  
// }

// //총 이름을 배열에 추가하는 함수
// function addGun(gunName:string){
//   GunList.push(gunName);

// }

// //아이디 값 삽입 함수
// function addId(id:number){
//   GunIds.push(id);

// }

// // 카테고리 값 삽입 함수
// function addCategory(category:string){
//   categories.push(category);

// }



// const filePath='./items.json';//아이템 정보가 들어있는 파일

// try {
//   const data = fs.readFileSync(filePath, 'utf8');
//   const parsedFile=JSON.parse(data);


//   for(const obj of parsedFile){

//     let items:Item2={
//       categoryId:'',
//       id:'',
//       shortName:'',
//       name:'',
//       iconLink:'',
//       imageLink:'',
//       value:{
//         value:0,
//         currencyName:''
//       },
//       conflictingItemIds:[],
//       caliber:'',
//       fireRate:0,
//       ergonomics:0,
//       verticalRecoil:0,
//       horizontalRecoil:0,
//       accuracyPercentageModifier:0,
//       capacity:0,
//       loadSpeedPercentageModifier:0,
//       checkSpeedPercentageModifier:0,
//       fleshDamage:0,
//       penetrationPower:0,
//       class:[],
//       fragmentationChancePercentage:0,
//       modSlots:[{
//         name:'',
//         compatibleItemIds:[]
//       }]
//     };

//     for(const item in obj){
//       if(item in items){

//         items[item]=obj[item];
//         items['conflictingItemIds']=null;
//         items['class']=null;
//         items['value']=null;
//         items['modSlots']=null;
//       }
//     }
//     console.log(items);
//     addItemIntoList(items);
//   }

// } catch (err) {
//   console.error('Error reading file:', err);
// }



// const jsonData = JSON.stringify(itemList);

// fs.writeFile('itemList.json', jsonData, (err:Error | null) => {
//   if (err) {
//     console.error('Error writing JSON file:', err);
//   } else {
//     console.log('JSON file saved successfully.');
//   }
// });

























// // // 
// // // 아이템 정보 from DB -> 클래스 -> 객체화 -> 페이지에 뿌리기
// // // 
// // // 
// // // 
// // // 
// // interface ItemForm{
// //   id:number,
// //   shortName:string,
// //   iconLink:string,
// //   imgLink:string,
// //   modSlot:{
// //     slotName:string,
// //     capatibleItems:string[],
// //     item:ItemForm[]
// //   }[]|null

// // }

// // class Item implements ItemForm{
// //   id:number;
// //   shortName:string;
// //   iconLink:string;
// //   imgLink:string;
// //   modSlot:{
// //     slotName:string,
// //     capatibleItems:string[],
// //     item:ItemForm[]
// //   }[];

// //   constructor(
// //     id:number,
// //     shortName:string,
// //     iconLink:string,
// //     imgLink:string,
// //     modSlot:{
// //       slotName:string,
// //       capatibleItems:string[],
// //       item:ItemForm[]
// //     }[])
// //   {
// //     this.id=id;
// //     this.shortName=shortName;
// //     this.iconLink=iconLink;
// //     this.imgLink=imgLink;
// //     this.modSlot=modSlot;
// //   }

// //   getter() {

// //     return{
// //       id:this.id,
// //       shortName:this.shortName,
// //       iconLink:this.iconLink,
// //       imgLink:this.iconLink,
// //       modSlot:this.modSlot
// //     }
// //   }

// //   setter(){


// //   }

  
// // }