module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f50a12bfdae37125a3b61e4fafba3811'),
  },
});
