<?php

namespace App\Controller;

use App\Repository\PetRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PetController extends AbstractController
{
    /**
     * @Route("/", name="pets")
     */
    public function index(PetRepository $petsRepository): Response
    {
        $pets = $petsRepository->findAll();

        return $this->render('pet/index.html.twig', [
            'pets' => $pets,
        ]);
    }
}
