Angular Schema Form input mask
======================================

Wrapper for [angular-input-masks](https://github.com/assisrafael/angular-input-masks)
into angular schema form


Avaliables format : fixed, cep, money, ie, br-phone, us-phone, scientific, percentage, cpf, cnpj, cpfcnpj, nfe

Example
======================================
```javascript
vm.schema = {
        type: "object",
        properties: {
            address: {
                type: "object",
                properties: {
                    cep: {
                        type: "string",
                        title: "CEP"
                    }
                }
            }
        }
    }


 vm.form = [
        {'key' : 'cep',
         'format' : 'cep'
	    }]
```

