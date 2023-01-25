export function Validate(inputs) {
    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

    if (!inputs.username) {
      errors.username = 'Se requiere un nombre';
    }
    if (!regexEmail.test(inputs.username)) {
      errors.username = 'Debe ser un correo electrónico';
    }
    if (inputs.username.length > 35) {
        errors.username = 'no puede tener más de 35 caracteres.';
      }
    if (!regexPass.test(inputs.password)) {
      errors.password = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    } 
    
    return errors
  }