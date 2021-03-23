function logar() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
  }
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    swal.fire({
      icon: "success",
      title: "Login foi realizado com sucesso",
    }).then(() => {
      window.location.replace("../index.html")
    })
  }).catch((error) => {
    const errorCode = error.code
    switch (errorCode) {
      case "auth/wrong-password":
        Swal.fire({
          icon: 'error',
          title: 'Senha inválida',
        })
        break
      case "auth/invalid-email":
        Swal.fire({
          icon: 'error',
          title: 'E-mail inválido',
        })
        break
      case "auth/user-not-found":
        swal.fire({
          icon: "warning",
          title: "Usuário não encontrado",
          text: "Deseja criar esse usuário?",
          showCancelButton: true,
          cancelButtonText: "Não",
          cancelButtonColor: "#aa3333",
          confirmButtonText: "Sim",
          // confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.value) {
            signUp(email, password)
          }
        })
        break
      default:
        swal.fire({
          icon: 'error',
          title: 'Ocorreu um erro, verifique as informações inseridas.'

        })
    }
  }
  )
}

function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    swal.fire({
      icon: "success",
      title: "Usuário foi criado com sucesso",
    })
      .then(() => {
        window.location.replace("../index.html")
      })
  }).catch((error) => {
    const errorCode = error.code
    switch (errorCode) {
      case "auth/weak-password":
        Swal.fire({
          icon: 'error',
          title: 'Senha fraca :(',
        })
        break
      default:
        Swal.fire({
          icon: 'error',
          title: 'Houve um erro :(',
        })
    }
  })
}

function logout() {
  firebase.auth().signOut()
}