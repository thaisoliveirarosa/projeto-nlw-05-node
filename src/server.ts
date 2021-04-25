import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

const PORT = process.env.PORT || 3333

http.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */
