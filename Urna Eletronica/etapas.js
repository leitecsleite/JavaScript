let etapas=[

    // candidados a vereador
    {
        titulo: 'VEREADOR',
        numeros:5,
        candidatos: [
           {
               numero: '38111',
               name: 'Fulano de tal',
               partido: 'ABC',
               fotos: [
                   {url: 'foto-1-2.jpg', legenda: 'Vereador', small: false}
               ]
           },

           { 
               numero: '77222',
               name: 'Beltrano da Silva',
               partido: 'DEFG',
               fotos: [
                   {url: 'foto-1.jpg', legenda: 'Vereador'}
               ]

           },
           
        ]
    },
    
  // candidatos a prefeito
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [
            {
                numero: '99',
                name:'Ciclano',
                partido: 'ABC',
                vice: 'Cic',
                fotos: [
                     {url:'foto-1-2-2.jpg', legenda: 'Prefeito'},
                     {url: '99_2_jpg', legenda: 'Vice-prefeito', small: true}
                ]
            },
            {
                numero: '84',
                name: 'Zulano',
                partido: 'QWERTY',
                vice:'Zul', 
                fotos: [
                    {url: 'foto-1-1.jpg', legenda: 'Prefeito'},
                    {url: '84-2.jpg', legenda: 'Vice-Prefeito', samll: true}
                ]
            },    

        ]
    }

];