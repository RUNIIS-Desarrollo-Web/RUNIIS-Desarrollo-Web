// Handler básico para Netlify Function
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      message: "Función ejecutada correctamente",
      path: event.path,
      method: event.httpMethod,
    }),
  };
};
