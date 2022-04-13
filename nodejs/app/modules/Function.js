exports.qm = () => {
    let result = `
    1). คุณรู้จักบริการใดของเราบ้าง? และมีความคิดเห็นต่อบริการแต่ละตัวของเราอย่างไรบ้าง <br>
    - รู้จักบริการในส่วนของ VPN ที่จะช่วยในการปกปิดข้อมูลเครื่องคอมพิวเตอร์ของผู้ใช้ให้มีความปลอดภัยระหว่างใช้บริการ<br>
    คิดว่าค่อนข้างดีเนื่องจากในยุคนี้หากมองในแง่ของการเล่นเกม เด็กวัยรุ่นก็ค่อนข้างมีความรู้และต้องการจะเล่นเกมบางเกมที่<br>
    ที่ไอพีของประเทศไทยไม่สามารถเล่นได้ บริการ VPN ก็จะสามารถช่วยแก้ปัญหาได้หรือไม่ว่าจะเป็นในส่วนของ Website ภายในประเทศไทย<br>
    บางเว็บไซต์ที่ถูกแบนไป บริการนี้ก็สามารถเข้ามาช่วยแก้ปัญหาได้เช่นกัน
    <p>
    2). จากประสบการณ์ของคุณที่ผ่านมามีเหตุการณ์ใดบ้างที่คุณรู้สึกว่าถูกกดดันมากที่สุด และคุณผ่านวิกฤตินั้นมาได้อย่างไร? <br>
    - งานที่ต้องการหลายๆอย่างในเวลาเดียวกันไม่ว่าจะเป็น เร่งทำให้ทันกำหนดส่ง, ต้องการความละเอียด, เป็นเนื้องานที่ยังไม่เคยลองทำและต้อง Research <br>
    วิธีการที่ผ่านมาได้คือต้องใช้เวลาในการทำงานชิ้นนั้นมากขึ้นกว่าปกติ และหลังจากเสร็จงานแล้วก็จะต้องหาความรู้เพิ่มเติม
    เพื่อป้องกันปัญหาและสามารถพัฒนา Logic ในการนำมาแก้ปัญหาได้เร็วยิ่งกว่าที่เคยเป็น
    <p>
    3). คุณมีคนที่เป็น idol หรือ ติดตามในวงการของคุณคือใครระบุชื่อหรือช่องทางที่เข้าดูบ่อยๆ <br>
    - คนที่เข้าดูบ่อยๆจะเป็น Youtuber ซะส่วนใหญ่เช่น นายอาร์ม, Pewdiepie, Patiphan Channel, พี่เอก Heart Rocker
    <br>
    `;
    
    return result;
};

exports.q1 = (stock) => {
    let result = "";
    const sum = Object.values(stock).reduce((acc, val) => {
        return acc + val;
    }, 0);
    for (const [key, val] of Object.entries(stock)) {
        var percentage = (val / 1410) * 100;
        result += "รุ่น "+ key + " ขายได้ทั้งหมดเป็นจำนวน " + percentage.toFixed(2) + '%' + '<br>';
    }
    return result;
};

exports.q2 = () => {
    let result = `2). <br>
    a.<br>
    &nbsp;&nbsp;&nbsp;&nbsp; ผลลัพธ์ของคำสั่งนี้คือ something went wrong เพราะว่า a += 0 จะมีค่าเป็น 1 เท่าเดิม <br>
    และเมื่อนำ b = a + c เนื่องจาก a มี type เป็น int แต่ c มี type เป็น string เมื่อนำมา + เข้าด้วยกัน <br>
    type ของ a จะกลายเป็น string ซึ่งเมื่อนำมาเช็คโดย a === b จะเป็นการเช็คทั้งค่าและ type <br>
    ของตัวแปร ซึ่งจะเป็น false จึงเข้า else ซึ่งจะแสดงผล something went wrong ในท้ายที่สุด <br>
    
    b. <br>
    &nbsp;&nbsp;&nbsp;&nbsp; ผลลัพธ์ของด้านบนที่เป็น Function Expression จะ Error เนื่องจากการจะใช้ฟังก์ชันที่ประกาศได้จะต้องใช้หลังจากประกาศไปแล้วเท่านั้นซึ่งจะเป็นการเก็บ <br>
    ฟังก์ชั่นไว้ในตัวแปร square ที่ประกาศขึ้นมา <br>
        ผลลัพธ์ของด้านล่างที่เป็น Function Declaration จะสามารถแสดงผลลัพธ์ได้ตามปกติเนื่องจากการประกาศแบบนี้ Function จะเกิด Hoisting และเลื่อนไปอยู่ด้านบนสุด <br>
    จึงทำให้สามารถใช้ฟังก์ชั่นได้`;
    
    return result;
};

exports.q2 = () => {
    let result = `2). <br>
    a.<br>
    &nbsp;&nbsp;&nbsp;&nbsp; ผลลัพธ์ของคำสั่งนี้คือ something went wrong เพราะว่า a += 0 จะมีค่าเป็น 1 เท่าเดิม <br>
    และเมื่อนำ b = a + c เนื่องจาก a มี type เป็น int แต่ c มี type เป็น string เมื่อนำมา + เข้าด้วยกัน <br>
    type ของ a จะกลายเป็น string ซึ่งเมื่อนำมาเช็คโดย a === b จะเป็นการเช็คทั้งค่าและ type <br>
    ของตัวแปร ซึ่งจะเป็น false จึงเข้า else ซึ่งจะแสดงผล something went wrong ในท้ายที่สุด <br>
    
    b. <br>
    &nbsp;&nbsp;&nbsp;&nbsp; ผลลัพธ์ของด้านบนที่เป็น Function Expression จะ Error เนื่องจากการจะใช้ฟังก์ชันที่ประกาศได้จะต้องใช้หลังจากประกาศไปแล้วเท่านั้นซึ่งจะเป็นการเก็บ <br>
    ฟังก์ชั่นไว้ในตัวแปร square ที่ประกาศขึ้นมา <br>
        ผลลัพธ์ของด้านล่างที่เป็น Function Declaration จะสามารถแสดงผลลัพธ์ได้ตามปกติเนื่องจากการประกาศแบบนี้ Function จะเกิด Hoisting และเลื่อนไปอยู่ด้านบนสุด <br>
    จึงทำให้สามารถใช้ฟังก์ชั่นได้`;
    
    return result;
};

exports.q3 = async () => {
    const getCountry = async () => {
        return [
            { name: "Thailand", abbr: "th", remark: "", regionId: 1 },
            { name: "Singapore", abbr: "sg", remark: "This is sg", regionId: 1 },
            { name: "United State", abbr: "US", remark: "", regionId: 7 },
            { name: "Brazil", abbr: "br", remark: "", regionId: 2 },
            { name: "United Kingdom", abbr: "uk", remark: "", regionId: 5 },
            { name: "France", abbr: "fr", remark: "", regionId: 5 },
            { name: "Nigeria", abbr: "ng", remark: "", regionId: 3 },
            { name: "Malaysia", abbr: "my", remark: "", regionId: 1 },
        ];
      }
    const getRegion = async () => {
        return [
            { id: 1, name: "Asia" },
            { id: 2, name: "South America" },
            { id: 3, name: "Africa" },
            { id: 4, name: "Antarctica" },
            { id: 5, name: "Europe" },
            { id: 6, name: "Australia" },
            { id: 7, name: "North America" }
        ];
    }

    let country = await getCountry();
    let region = await getRegion();
    const result = country.reduce(async(acc, item) => {
        let accum = await acc;
        let find = region.find(item2 => item2.id === item.regionId);
        accum[item.abbr.toUpperCase()] = find.name;
        console.log(accum)
        return accum;
    }, {});
    return result;
};

exports.q4 = () => {
    let result = "";
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => {
            return object[key] === value
        });
    }

    const checkParenthesis = (str) => {
        const types = { '(': ')', '{': '}', '[': ']' };
        const arr = [];
        for (const char of str) {
            if (types[char]) { // get all open parenthesis
                arr.push(char);
            }
            else if (arr.pop() !== getKeyByValue(types, char)){ 
                // compare with close paranthesis it'll pop until its empty
                // it's need to be exactly same character from inner to outside
                // if not it'll return false
                return false;
            }
        }
        return arr.length === 0;
    }
    result += "\"()\"" + "=>" + checkParenthesis("()") + "<br>";
    result += "\"([]])\"" + "=>" + checkParenthesis("([]])") + "<br>";
    result += "\"([{}])\"" + "=>" + checkParenthesis("([{}])") + "<br>";
    result += "\")\"" + "=>" + checkParenthesis(")") + "<br>";
    result += "\"(]}]\"" + "=>" + checkParenthesis("(]}]") + "<br>";
    result += "\"([)]\"" + "=>" + checkParenthesis("([)]") + "<br>";
    result += "\"{\"" + "=>" + checkParenthesis("{") + "<br>";
    return result;
};

exports.q5 = () => {
    let result = "";
    const sum = (n, m) => {
        let summary = 0;
        for (n; n<=m; n++){
            summary += n;
        }
        return summary;
    }
    result += "c.&nbsp;&nbsp;" + "n=1,&nbsp;m=99&nbsp;&nbsp;=>&nbsp;" + sum(1,99) + "<br>";
    result += "d.&nbsp;&nbsp;" + "n=446,&nbsp;m=779&nbsp;&nbsp;=>&nbsp;" + sum(446,779) + "<br>";
    result += "e.&nbsp;&nbsp;" + "n=3,&nbsp;m=1099&nbsp;&nbsp;=>&nbsp;" + sum(3,1099) + "<br>";
    result += "f.&nbsp;&nbsp;" + "n=34,&nbsp;m=1000000&nbsp;&nbsp;=>&nbsp;" + sum(34,1000000) + "<br>";
    return result;
};