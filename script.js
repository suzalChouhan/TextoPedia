const TextArea = document.querySelector('#txtArea');
        const upCase = document.querySelector('#up');
        const lowCase = document.querySelector('#low');
        const wordCountNum = document.querySelector('.wordCount');


        function fontSizeFunc(value) {
                   if (value === '2f') {TextArea.style.fontSize = '2px';}
               else if (value === '6f') {TextArea.style.fontSize = '6px';}
               else if (value === '12f') {TextArea.style.fontSize = '12px';}
               else if (value === '14f') {TextArea.style.fontSize = '14px';}
               else if (value === '16f') { TextArea.style.fontSize = '16px';}
               else if (value === '18f') { TextArea.style.fontSize = '18px';}
               else if (value === '24f') {TextArea.style.fontSize = '24px';}
               else if (value === '32f') {TextArea.style.fontSize = '32px';}
               else if (value === '64f') {TextArea.style.fontSize = '64px';}
         }
         function fontStyleFunc(value) {
            if (value === 'Courier') {
                TextArea.style.fontFamily = 'Courier New';
            } else if (value === 'Franklin') {
                TextArea.style.fontFamily = 'Franklin Gothic Medium';
            } else if (value === 'Gill') {
                TextArea.style.fontFamily = 'Gill Sans';
            } else if (value === 'Lucida') {
                TextArea.style.fontFamily = 'Lucida Sans';
            } else if (value === 'Georgia') {
                TextArea.style.fontFamily = 'Georgia';
            } else if (value === 'Poppins') {
                TextArea.style.fontFamily = 'Poppins';
            } else if (value === 'Impact') {
                TextArea.style.fontFamily = 'Impact';
            } else if (value === 'Verdana') {
                TextArea.style.fontFamily = 'Verdana';
            } else if (value === 'Arial') {
                TextArea.style.fontFamily = 'Arial';
            } else if (value === 'Times New Roman') {
                TextArea.style.fontFamily = 'Times New Roman';
            } else if (value === 'Helvetica') {
                TextArea.style.fontFamily = 'Helvetica';
            } else if (value === 'Tahoma') {
                TextArea.style.fontFamily = 'Tahoma';
            } else if (value === 'Century Gothic') {
                TextArea.style.fontFamily = 'Century Gothic';
            } else if (value === 'Trebuchet MS') {
                TextArea.style.fontFamily = 'Trebuchet MS';
            } else if (value === 'Arial Narrow') {
                TextArea.style.fontFamily = 'Arial Narrow';
            } else if (value === 'Palatino') {
                TextArea.style.fontFamily = 'Palatino';
            } else if (value === 'Bookman') {
                TextArea.style.fontFamily = 'Bookman';
            } else if (value === 'Comic Sans MS') {
                TextArea.style.fontFamily = 'Comic Sans MS';
            } else if (value === 'Copperplate') {
                TextArea.style.fontFamily = 'Copperplate';
            } else if (value === 'Courier New') {
                TextArea.style.fontFamily = 'Courier New';
            } else {
                // Handle the default case or do nothing
            }
        }
        


    
        function stalert(){
                    alert("Words Limit Exceeded!!(Max Limit is 10000 Words)");
                 }
        const toUpper = function(){ 
                let length = (TextArea.value).length;
                 if (length === 0){alert("Please Enter any Text First")}
            else if(length > 10000){alert("Words Limit Exceeded!!(Currently, Max Limit is 10000 Words)")}
            else {TextArea.value = TextArea.value.toUpperCase(); }
        }


        upCase.addEventListener('click', toUpper);
        

        const toLower = function(){
            let length = (TextArea.value).length;
                if (length === 0) { alert("Please Enter any Text First")}
           else if(length > 10000){alert("Words Limit Exceeded!!(Currently, Max Limit is 10000 Words)")}
           else {TextArea.value = TextArea.value.toLowerCase(); }
         }
 

       lowCase.addEventListener('click', toLower);


        const newFunc = function(){
            let length = (TextArea.value).length;
            wordCountNum.innerHTML = `${length}/10000`;
                 if(length > 10000){TextArea.style.boxShadow = '0px 0px 20px red';
                                  wordCountNum.style.color = 'red';
                                  setTimeout(stalert, 500)}
            else{TextArea.style.border = 'white';
                 wordCountNum.style.color = 'white';
                 TextArea.style.boxShadow = '0px 15px 15px black'}

            }

        function txtDeco(value){
                if(value == 'Bold') {TextArea.classList.add('bold-text')}
           else if(value == 'Italic'){
            TextArea.classList.remove('bold-text')
            TextArea.classList.add('italic')}
           else if(value == 'Underline'){
           TextArea.classList.remove('bold-text','italic') 
           TextArea.style.textDecoration ='underline'}
        }
      
      
        function clearFunc(){
            TextArea.value = "";
            let length = (TextArea.value).length;
            length === 0;
            wordCountNum.innerHTML = `${length}/10000`;
        }
        
        window.addEventListener('keydown',newFunc)

        // function darkMode(){
        //     let h1head = document.querySelector('.hding');
        //     h1head.style.color = 'white';
        //     let wcType = document.querySelector('.wordCount');
        //     wcType.style.color = 'white';
        //     let lcc = document.querySelector('.lcount');
        //     lcc.style.color = 'white';
        //     document.body.style.backgroundColor = "#212121"
        //     wordCountNum.style.color = 'white';
        //     let modalBody = document.querySelector('.modalEditContent')
        //     modalBody.style.backgroundColor = '#212121'
        //     document.querySelector('.labCol').style.color = 'white';
        //     document.querySelector('.labCol3').style.color = 'white';

            

        // }

        // function lightMode(){
        //     let h1head = document.querySelector('.hding');
        //     h1head.style.color = 'black';
        //     let wcType = document.querySelector('.wordCount');
        //     wcType.style.color = 'black';
        //     let lcc = document.querySelector('.#wcid');
        //     lcc.style.color = 'black';
        //     document.body.style.backgroundColor = "#fff";
        //     wordCountNum.style.color = 'black';
        //     let modalBody = document.querySelector('.modalEditContent')
        //     modalBody.style.backgroundColor = '#fff'
        //     document.querySelector('.labCol').style.color = 'black';
        //     document.querySelector('.labCol3').style.color = 'black';
        // }
