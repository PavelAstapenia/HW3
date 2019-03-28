    class Validation {
        criteriaState=new Map();

        constructor (criteria){
            this.criteria=criteria;
            this.criteriaState=this.criteria.reduce((m,arg,i,arr)=>{
                return m.set(arr[i].name,'');
                },this.criteriaState);
            this.validated={
                valid:'true',
                errors:new Map()
            };
        }

        toggleValidator(name, state){
            if (typeof state=='undefined'){
                if (this.criteriaState.get(name)==''){
                    this.criteriaState.set(name,'false');
                } else {
                    switch (this.criteriaState.get(name)){
                        case 'true':
                            this.criteriaState.set(name,'false');
                            break;
                        case 'false':
                            this.criteriaState.set(name,'true');
                            break;
                    }
                }
            } else {

                switch (state){
                    case true:
                        console.log(this.criteriaState.get(name));
                        break;
                    case false:
                        this.criteriaState.set(name,'false');
                        break;
                }
            }
        }

        validate(value){

            function logic(value,criteria) {}

            for (let i=0; i<(this.criteria.length); i++){
                if (this.criteriaState.get(this.criteria[i].name)=='true'){
                    logic(value,this.criteria[i]);

                    if (this.criteria[i].check=='false'){
                        this.validated.valid='false';
                        this.validated.error=([...[this.criteria[i].name,this.criteria[i].massage]]);
                    }
                }
            }
            return this.validated;
        }
    }



