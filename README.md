# JavaScript Õpik

## Sisukord
1. [JavaScripti Ajalugu](#javascripti-ajalugu)
2. [Sissejuhatus `const` käsule](#sissejuhatus-const-käsule)



**roadmap.sh/javascript**


---

## JavaScripti Ajalugu
JavaScript loodi 1995. aastal Brendan Eich'i poolt Netscape'i brauseri jaoks. Alguses oli see mõeldud lihtsate skriptide kirjutamiseks veebilehtedel, kuid aja jooksul on sellest saanud üks populaarsemaid programmeerimiskeeli, mida kasutatakse nii kliendi- kui ka serveripoolsel arendusel.

---

## Sissejuhatus `const` käsule
`const` on JavaScriptis kasutatav võtmesõna, millega defineeritakse konstantne muutuja. See tähendab, et muutuja viide ei muutu, kuid kui väärtus on objekt või massiiv, saab selle sisu siiski muuta. Näiteks:

```javascript
const number = 10;
// number = 20; // See tekitaks vea
```

**teisi sõnu on OMISTAMINE**

Javascript on kehv matemaatikas. Panganduses kasutatakse teisi keeli näiteks JAVA vms või kasutatakse sentidesse.

Boolean on KAS küsimus ning hea tava on antud objekti nime 
alustada ...is... - mis annab juba kiiresti teada, et on jah või ei küsimine.

=== on rangem võrdlemine kui ==


```javascript
console.log("== märkimine:", "1" == 1);
console.log("=== märkimine:", "1" === 1);

// // Käivita kood
// == märkimine: true
// === märkimine: false

```



---

## kuidas broseris koodi jooksutada


See kood töötab, aga sinu HTML-lehel ei kuvata console.log() väljundit, sest see läheb brauseri konsooli, mitte lehe #output div-i. Praegu minu näidis HTML kontrollib ainult eval() tagastatud väärtust, mitte console.log() sisu.
Kui tahad, et konsooli logid kuvataks otse lehel, peame kirjutama väikese "konsooli simulatsiooni". Siin on täiustatud versioon:

```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Jooksutaja</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        textarea {
            width: 100%;
            height: 150px;
            font-family: monospace;
            font-size: 14px;
        }
        button {
            margin-top: 10px;
            padding: 10px 15px;
            font-size: 16px;
        }
        #output {
            margin-top: 20px;
            padding: 10px;
            background: #f4f4f4;
            border: 1px solid #ccc;
            min-height: 50px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Jooksutaja</h1>
    <p>Sisesta oma JavaScript kood:</p>
    <textarea id="code">// Näide: console.log("Tere maailm!");</textarea>
    <br>
    <button onclick="runCode()">Käivita kood</button>
    <div id="output"></div>

    <script>
        function runCode() {
            const code = document.getElementById('code').value;
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // puhasta eelmine väljund
            try {
                const result = eval(code);
                if (result !== undefined) {
                    outputDiv.innerHTML = '<strong>Väljund:</strong> ' + result;
                } else {
                    outputDiv.innerHTML = '<strong>Kood käivitatud.</strong> Kontrolli konsooli.';
                }
            } catch (error) {
                outputDiv.innerHTML = '<span style="color:red;"><strong>Viga:</strong> ' + error + '</span>';
            }
        }
    </script>
</body>

```







---

## Lõpp