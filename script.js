function ageCal() {
    const year = Number(document.getElementById("validationYear").value);
    const month = Number(document.getElementById("validationMonth").value);
    const day = Number(document.getElementById("validationDay").value);

    const today = new Date();
    const dd = Number(String(today.getDate()).padStart(2, '0'));
    const mm =Number( String(today.getMonth() + 1).padStart(2, '0'));
    const yyyy = today.getFullYear();

    var checkDisable=false;

//opravit!!! -hotovo
// zatial ide
    if((year>1900)&&(year<=yyyy)){
        if(year==yyyy){
            if(month<=mm){
                if(month==mm){
                    if(day<dd){
                        document.getElementById("validationAge").innerHTML = String(yyyy - year);
                        document.getElementById("validationAge").style.padding="0";
                        checkDisable = false;
                    }
                    else{

                        checkDisable = true;
                    }
                }
            }
            else if(month>mm){

                checkDisable = true;
            }
        }
        else if(year<yyyy){

            if(month==mm) {
                    if (day < dd) {
                        document.getElementById("validationAge").innerHTML = String(yyyy - year);
                        document.getElementById("validationAge").style.padding="0";
                        checkDisable = false;
                    }
                    else if(day>=dd) {
                        document.getElementById("validationAge").innerHTML = String(yyyy - year - 1);
                        document.getElementById("validationAge").style.padding="0";
                        checkDisable = false;
                    }
            }
            else if(month<mm){
                    document.getElementById("validationAge").innerHTML = String(yyyy - year);
                    document.getElementById("validationAge").style.padding="0";
                    checkDisable = false;
            }
            else if(month>mm){
                document.getElementById("validationAge").innerHTML = String(yyyy - year-1);
                document.getElementById("validationAge").style.padding="0";
                checkDisable = false;
            }

        }

    }
    if((year<Number(1900))||(Number(year>yyyy))){

        checkDisable = true;
    }



    if((Number(1)>day)||(day>Number(31))){

        checkDisable=true;

    }
    if((Number(1)<day)||(day<Number(31))){
        document.getElementById("check_label").innerHTML = "Confirm (top left corner)";

    }
    if((month==2)&&(day>28)){

        checkDisable=true;
    }
    if(((month==4)||(month==6)||(month==9)||(month==11))&&(day>30)){

        checkDisable=true;
    }

    document.getElementById("customCheck1").disabled = checkDisable;



}


function showOther() {
    const x = document.getElementById("Other");
    x.style.display = "block";

}
function hideOther() {
    const x = document.getElementById("Other");
    x.style.display = "none";

}


function hideOtherCheck() {
    const x = document.getElementById("other-check");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}
function ageVer(){


            const checkbox = document.getElementById("customCheck1");
            if (checkbox.checked == true) {
                document.getElementById("ageCard").style.background = "#0A90F5";
                document.getElementById("check_label").innerHTML = "Confirmed !";
                document.getElementById("error-message").style.display="none";
            } else {
                document.getElementById("ageCard").style.background = "#E01F23";
                document.getElementById("check_label").innerHTML = "Confirm (left top corner)";
                document.getElementById("error-message").style.display="block";
            }


}
function drinkChoice(){
    const x = document.getElementById("select-drink").value;

    if(x==1){
        document.getElementById("choice-alcoholic").style.display = "block";
        document.getElementById("choice-non-alcoholic").style.display = "none";
        document.getElementById("choice-abstinent").style.display = "none";
        document.getElementById("choice-driver").style.display = "none";
    }
    if(x==2){
        document.getElementById("choice-non-alcoholic").style.display = "block";
        document.getElementById("choice-alcoholic").style.display = "none";
        document.getElementById("choice-shots").style.display = "none";
        document.getElementById("choice-beer").style.display = "none"

    }
    if(x==0){
        document.getElementById("choice-non-alcoholic").style.display = "none";
        document.getElementById("choice-alcoholic").style.display = "none";
        document.getElementById("choice-abstinent").style.display = "none";
        document.getElementById("choice-driver").style.display = "none";
        document.getElementById("choice-shots").style.display = "none";
        document.getElementById("choice-beer").style.display = "none"
        document.getElementById("select-alcoholic").value=0;
        document.getElementById("select-non-alcoholic").value=0;


    }
}
function alcoholicChoice(){
    const x = document.getElementById("select-alcoholic").value;

    if(x==1){
        document.getElementById("choice-beer").style.display = "block";
        document.getElementById("choice-shots").style.display = "none";
    }
    if(x==2){
        document.getElementById("choice-shots").style.display = "block";
        document.getElementById("choice-beer").style.display = "none";
    }
    if(x==0){
        document.getElementById("choice-beer").style.display = "none";
        document.getElementById("choice-shots").style.display = "none";
    }
}
function nonAlcoholicChoice(){
    const x = document.getElementById("select-non-alcoholic").value;

    if(x==1){
        document.getElementById("choice-driver").style.display = "block";
        document.getElementById("choice-abstinent").style.display = "none";
    }
    if(x==2){
        document.getElementById("choice-abstinent").style.display = "block";
        document.getElementById("choice-driver").style.display = "none";
    }
    if(x==0){
        document.getElementById("choice-driver").style.display = "none";
        document.getElementById("choice-abstinent").style.display = "none";
    }
}
