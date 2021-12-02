async function criarComentario() {

  if (document.getElementById('text').length = !0 && document.getElementById('author').length != 0) {
    try {

      const author = document.getElementById('author').value;
      const text = document.getElementById('text').value;
      await db.collection("comments").add({
        text: text,
        author: author,

      });
    } catch (error) {
      console.log(error);
    }
  } else {
    window.alert("Preencha os campos");
  }
}