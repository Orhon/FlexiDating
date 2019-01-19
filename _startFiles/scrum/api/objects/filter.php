<?php
class Filter
{ 
    // object properties
    public $id;
    public $familienaam;
    public $voornaam;
    public $geboortedatum;
    public $email;
    public $nickname;
    public $foto;
    public $beroep;
    public $sexe;
    public $haarkleur;
    public $oogkleur;
    public $grootte;
    public $grootteOperator;
    public $gewicht;
    public $gewichtOperator;
    public $wachtwoord;
    public $orderBy;

 
    // constructor with $db as database connection
    public function __construct()
    {
        //zet hier je constructor code
    }

    public function sanitizeMe()
    {
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->familienaam = htmlspecialchars(strip_tags($this->familienaam));
        $this->voornaam = htmlspecialchars(strip_tags($this->voornaam));
        $this->geboortedatum = htmlspecialchars(strip_tags($this->geboortedatum));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->nickname = htmlspecialchars(strip_tags($this->nickname));
        $this->foto = htmlspecialchars(strip_tags($this->foto));
        $this->beroep = htmlspecialchars(strip_tags($this->beroep));
        $this->sexe = htmlspecialchars(strip_tags($this->sexe));
        $this->haarkleur = htmlspecialchars(strip_tags($this->haarkleur));
        $this->oogkleur = htmlspecialchars(strip_tags($this->oogkleur));
        $this->grootte = htmlspecialchars(strip_tags($this->grootte));
        $this->grootteOperator = htmlspecialchars(strip_tags($this->grootteOperator));
        $this->gewicht = htmlspecialchars(strip_tags($this->gewicht));
        $this->gewichtOperator = htmlspecialchars(strip_tags($this->gewichtOperator));
        $this->wachtwoord = htmlspecialchars(strip_tags($this->wachtwoord));
        $this->orderBy = htmlspecialchars(strip_tags($this->orderBy));
    }
}