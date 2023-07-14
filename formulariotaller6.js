// FORMULAS FORMULARIOS EN GENERAL

const formdoc = document.getElementById("formulariodoc")
const formpatien = document.getElementById("formulariopac")

// Se le da una funcion al boton submit del formulario

let medicos = []

formdoc.addEventListener("submit", validarform2)

function validarform2(event) {
    event.preventDefault()

    // DATOS DEL DOCTOR
    const ndoctor = document.getElementById("name1").value
    const apdoctor = document.getElementById("lastnamed").value
    const cddoctor = document.getElementById("cd1").value
    const especialidadr = document.getElementById("especiald").value
    const consultorio = document.getElementById("consul").value
    const correodoc = document.getElementById("email").value

    // Expresiones regulares

    const namepaok = /^[A-Za-z\s]+$/.test(ndoctor)

    if (!namepaok) {
        alert("El nombre del doctor no es correcto")
        return;
    }

    const lastdocok = /^[A-Za-z\s]+$/.test(apdoctor)

    if (!lastdocok) {
        alert("El apellido del doctor no es correcto")
        return;
    }

    const cddoctorok = /^\d{1,11}$/.test(cddoctor)

    if (!cddoctorok) {
        alert("La cédula del doctor se debe corregir")
        return;
    }

    const consultoriok = /^[a-zA-Z0-9]+$/.test(consultorio)

    if (!consultoriok) {
        alert("Se debe corregir el consultorio")
        return;
    }

    const correodocok = /^\S+@\S+\.\S+$/.test(correodoc)

    if (!correodocok) {
        alert("Se debe corregir el correo del doctor")
        return;
    }

    // CREAR OBJETO JAVASCRIPT 

    const doct = {
        nombre: ndoctor,
        apellido: apdoctor,
        cedula: cddoctor,
        especialidad: especialidadr,
        consultorio: consultorio,
        correodoctor: correodoc,
    }

    guardar_localstorage2();

function guardar_localstorage2() {
    let localdoctores = localStorage.getItem("medicos")
    if (localdoctores) {
        medicos = JSON.parse(localdoctores)
    }
    medicos.push(doct)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    alert("Doctor registrado con exito")

    formdoc.reset()
}
    // ACTUALIZAR LISTA DE DOCTORES 
    mostrardatosd()
}

function mostrardatosd() {
    const doctorestabla = document.getElementById("tabladoctor")
    const tbdy = doctorestabla.querySelector("tbody")
    doctorestabla.innerHTML = "<thead><tr><th>Nombre</th><th>Apellido</th><th>Cédula</th><th>Especialidad(doctor)</th><th>Consultorio</th><th>Correodecontacto</th><tr></thead>"

    medicos.forEach((doct) => {
        // CREAR TUPLA
        const tupla = doctorestabla.insertRow(-1)
        // CREAR LOS CAMPOS 
        const ndoctor = document.createElement("td")
        const apdoctor = document.createElement("td")
        const cddoctor = document.createElement("td")
        const especialidadr = document.createElement("td")
        const consultorio = document.createElement("td")
        const correodoc = document.createElement("td")

        ndoctor.textContent = doct.nombre
        apdoctor.textContent = doct.apellido
        cddoctor.textContent = doct.cedula
        especialidadr.textContent = doct.especialidad
        consultorio.textContent = doct.consultorio
        correodoc.textContent = doct.correodoctor

        //AGREGAR LOS CAMPOS A LA TUPLA
        tupla.appendChild(ndoctor)
        tupla.appendChild(apdoctor)
        tupla.appendChild(cddoctor)
        tupla.appendChild(especialidadr)
        tupla.appendChild(consultorio)
        tupla.appendChild(correodoc)

    })
    
       //convertir el objeto JSON a cadena de texto
       const jsondres = JSON.stringify(medicos)
       //crear un blob de la cadena de texto
       const blob1 = new Blob([jsondres], {type:"application/json"})
       //crear una URL para el objeto blob
       const url1 = URL.createObjectURL(blob1)
       //crear un enlace de descarga
       const padre2 = document.getElementById("descarga2")
       const enlaceDescarga = document.createElement("a")
       enlaceDescarga.href = url1
       enlaceDescarga.download = "medicos.json"
       enlaceDescarga.textContent = "Descargar JSON de doctores"
       padre2.appendChild(enlaceDescarga)
   }


//---------------INFORMACIÓN PACIENTES-------------------------------

let pacientes = []

formpatien.addEventListener("submit", validateForm)

function validateForm(event) {
    event.preventDefault()

    // DATOS DEL F. PACIENTE 

    const npaciente = document.getElementById("name").value
    const lastpaciente = document.getElementById("lastnamep").value
    const cdpaciente = document.getElementById("cd").value
    const edadpaci = document.getElementById("age").value
    const contactop = document.getElementById("phone").value
    const especialp = document.getElementById("especialpa").value

    // Expresiones regulares

    const nombreperok = /^[A-Za-z\s]+$/.test(npaciente)

    if (!nombreperok) {
        alert("El nombre del paciente no es correcto")
        return;
    }

    const apellipaciok = /^[A-Za-z\s]+$/.test(lastpaciente)

    if (!apellipaciok) {
        alert("El apellido del paciente no es correcto")
        return;
    }

    const cdpacienteok = /^\d{1,11}$/.test(cdpaciente)

    if (!cdpacienteok) {
        alert("La cédula del paciente se debe corregir")
        return;
    }

    const edadok = /^\d{1,3}$/.test(edadpaci)

    if (!edadok) {
        alert("Se debe corregir la edad del paciente")
        return;
    }

    const telefonok = /^\d{1,11}$/.test(contactop)

    if (!telefonok) {
        alert("Se debe escribir nuevamente el contacto del paciente")
        return;
    }
    // CREAR OBJETO JAVASCRIPT 

    const patient = {
        nombrepa: npaciente,
        apellidopa: lastpaciente,
        cedulapa: cdpaciente,
        edad: edadpaci,
        celular: contactop,
        especialidad2: especialp,
    }

    guardar_localstorage();

    function guardar_localstorage() {
        let personas = localStorage.getItem("pacientes")
        if (personas) {
            pacientes = JSON.parse(personas)
        }
        pacientes.push(patient)
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
        alert("Paciente registrado con exito")

        formpatien.reset()

        // ACTUALIZAR LISTA DE DOCTORES 
        registrarDatos()
    }

    function registrarDatos() {
        const pacientestabla = document.getElementById("tabladepaciente")
        const tbdy = pacientestabla.querySelector("tbody")
        pacientestabla.innerHTML = "<thead><tr><th> Nombre </th><th> Apellido</th><th> Cédula </th><th> Edad </th><th> Número de celular</th><th> Especialidad (paciente) </th><tr></thead>"

        pacientes.forEach((patient) => {
            // CREAR TUPLA
            const tupla2 = pacientestabla.insertRow(-1)
            // CREAR LOS CAMPOS 
            const npaciente = document.createElement("td")
            const lastpaciente = document.createElement("td")
            const cdpaciente = document.createElement("td")
            const edadpaci = document.createElement("td")
            const contactop = document.createElement("td")
            const especialp = document.createElement("td")

            npaciente.textContent = patient.nombrepa
            lastpaciente.textContent = patient.apellidopa
            cdpaciente.textContent = patient.cedulapa
            edadpaci.textContent = patient.edad
            contactop.textContent = patient.celular
            especialp.textContent = patient.especialidad2

            //AGREGAR LOS CAMPOS A LA TUPLA
            tupla2.appendChild(npaciente)
            tupla2.appendChild(lastpaciente)
            tupla2.appendChild(cdpaciente)
            tupla2.appendChild(edadpaci)
            tupla2.appendChild(contactop)
            tupla2.appendChild(especialp)

            // convertir el obejto JSON a cadena
        })
    }
     //convertir el objeto JSON a cadena de texto
     const jsonString = JSON.stringify(pacientes)
    //crear un blob de la cadena de texto
    const blob = new Blob([jsonString], {type:"application/json"})
    //crear una URL para el objeto blob
    const url = URL.createObjectURL(blob)
    //crear un enlace de descarga
    const padre = document.getElementById("descarga")
    const enlaceDescarga = document.createElement("a")
    enlaceDescarga.href = url
    enlaceDescarga.download = "pacientes.json"
    enlaceDescarga.textContent = "Descargar JSON de pacientes"
    padre.appendChild(enlaceDescarga)
}

