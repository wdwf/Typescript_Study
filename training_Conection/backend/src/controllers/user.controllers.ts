import { Request, Response } from 'express';
import { User } from '../entities/User';

export const createUser = async (req:Request, res:Response) => {
  try {
    const { firstname, lastname, email } = req.body;

    if (!(firstname && lastname && email)) {
      return res.status(406).json({ message: "Preencha todos os campos" })
    }

    const emailAlreadyExist = await User
    .createQueryBuilder('user')
    .where('user.email = :userEmail', { userEmail: email })
    .getOne();

    if (emailAlreadyExist) {
      return res.status(404).json({ message: "Email ja cadastrado" })
    }

    const user = new User();

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;

    await user.save()

    console.log(user);
    
    return res.status(200).json({ message: "Usuário criado com sucesso." });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export const getUsers = async (req:Request, res:Response) => {
  try {

    const users = await User.find()
    return res.json(users)

  } catch (error) {
    console.log(error);
    
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateUser = async (req: Request, res:Response) => {
  try {
    /*
    -Retorna o parametro da url
    console.log(req.params);
    -Retorna o corpo da requisição
    console.log(req.body);
    */

    const { id } = req.params;

    //Busca no modelo pelo id fornecido
    const user = await User.findOneBy({id: parseInt(id) });

    if (!user) {
      return res.status(404).json({ message: "Recurso não encontrado" })
    }

    await User.update({ id: parseInt(id) }, req.body)

    return res.status(200).json({ message: "Usuario Atualizado com sucesso"})
    
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params;

    const result = await User.delete({ id: parseInt(id) })

    if (result.affected === 0) {
      return res.status(404).json({ message: "Usuario não encontrado" })
    }

    return res.status(200).json({ message: "Recurso deletado com sucesso" });

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}


export const getUser = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params;

    const user = await User.findOneBy({id: parseInt(id) });

    if (!user) {
      return res.status(404).json({ message: "Usuario não encontrado" })
    }

    return res.status(200).json( user )

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}