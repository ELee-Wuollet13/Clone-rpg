import './styles.css';
import './rpg-logic.js';
import 'jquery';

$(document).ready(function(){
  form.submit(function(){
    const charName = $("#name").val();
    const charRace = $(".race").val();
    const charJob = $(".job").val();
    let newchar = new charSheet (charName, charRace, charJob);
    });
  });
