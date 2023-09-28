function tocaSom (seletorAudio) {
      const elemento = document.querySelector (seletorAudio);

      if (elemento && elemento. localName == 'audio') { 
        elemento.pay()
      }
      else{
      //alert('Elemento não encontrado")
        //alert('Elemento não encontrado ou seletor inválido);
      }
    }