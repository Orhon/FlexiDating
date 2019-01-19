<?php
class Profiel
{
 
    // database connection and table name
    private $conn;
    private $table_name = "profielen";
 
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
    public $gewicht;
    public $wachtwoord;
 
    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    private function sanitizeMe()
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
        $this->gewicht = htmlspecialchars(strip_tags($this->gewicht));
        $this->wachtwoord = htmlspecialchars(strip_tags($this->wachtwoord));
    }
    
    // read profiel
    function read()
    {
        // select all query
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY id DESC";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // used when filling up the update profiel form
    function readOne()
    { 
        // query to read single record
        $query = "SELECT * FROM " . $this->table_name . " WHERE id=:id";
 
        // prepare query statement
        $stmt = $this->conn->prepare($query);
 
        // bind id of profiel to be updated
        $stmt->bindParam(':id', $this->id);
 
        // execute query
        $stmt->execute();
 
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        // set values to object properties
        $this->id = $row['id'];
        $this->familienaam = $row['familienaam'];
        $this->voornaam = $row['voornaam'];
        $this->geboortedatum = $row['geboortedatum'];
        $this->email = $row['email'];
        $this->nickname = $row['nickname'];
        $this->foto = $row['foto'];
        $this->beroep = $row['beroep'];
        $this->sexe = $row['sexe'];
        $this->haarkleur = $row['haarkleur'];
        $this->oogkleur = $row['oogkleur'];
        $this->grootte = $row['grootte'];
        $this->gewicht = $row['gewicht'];
        $this->wachtwoord = $row['wachtwoord'];
    }

    // create profiel
    function create()
    {
        // query to insert record
        $query = "INSERT INTO `" . $this->table_name . "`(`id`, `familienaam`, `voornaam`, `geboortedatum`, `email`, `nickname`, `foto`, `beroep`, `sexe`, `haarkleur`, `oogkleur`, `grootte`, `gewicht`, `wachtwoord`) 
        VALUES ( :id,
                :familienaam,
                :voornaam,
                :geboortedatum,
                :email,
                :nickname,
                :foto,
                :beroep,
                :sexe,
                :haarkleur,
                :oogkleur,
                :grootte,
                :gewicht,
                :wachtwoord
        )";
 
        // prepare query
        $stmt = $this->conn->prepare($query);
 
        // sanitize
        $this->sanitizeMe();
     
        // bind values
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":familienaam", $this->familienaam);
        $stmt->bindParam(":voornaam", $this->voornaam);
        $stmt->bindParam(":geboortedatum", $this->geboortedatum);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":nickname", $this->nickname);
        $stmt->bindParam(":foto", $this->foto);
        $stmt->bindParam(":beroep", $this->beroep);
        $stmt->bindParam(":sexe", $this->sexe);
        $stmt->bindParam(":haarkleur", $this->haarkleur);
        $stmt->bindParam(":oogkleur", $this->oogkleur);
        $stmt->bindParam(":grootte", $this->grootte);
        $stmt->bindParam(":gewicht", $this->gewicht);
        $stmt->bindParam(":wachtwoord", $this->wachtwoord);
 
        // execute the query
        return $stmt->execute();
    }

    // update the profiel
    function update()
    {
 
        // update query
        $query = "UPDATE " . $this->table_name . "
            SET
                id = :id,
                familienaam = :familienaam,
                voornaam = :voornaam,
                geboortedatum = :geboortedatum,
                email = :email,
                nickname = :nickname,
                foto = :foto,
                beroep = :beroep,
                sexe = :sexe,
                haarkleur = :haarkleur,
                oogkleur = :oogkleur,
                grootte = :grootte,
                gewicht = :gewicht,
                wachtwoord = :wachtwoord           
            WHERE
                id = :id";
 
        // prepare query statement
        $stmt = $this->conn->prepare($query);
 
        // sanitize
        $this->sanitizeMe();

        // bind values
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":familienaam", $this->familienaam);
        $stmt->bindParam(":voornaam", $this->voornaam);
        $stmt->bindParam(":geboortedatum", $this->geboortedatum);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":nickname", $this->nickname);
        $stmt->bindParam(":foto", $this->foto);
        $stmt->bindParam(":beroep", $this->beroep);
        $stmt->bindParam(":sexe", $this->sexe);
        $stmt->bindParam(":haarkleur", $this->haarkleur);
        $stmt->bindParam(":oogkleur", $this->oogkleur);
        $stmt->bindParam(":grootte", $this->grootte);
        $stmt->bindParam(":gewicht", $this->gewicht);
        $stmt->bindParam(":wachtwoord", $this->wachtwoord);
 
        // execute the query
        return $stmt->execute();
    }

    // delete the profiel
    function delete()
    { 
        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id=:id";
 
        // prepare query
        $stmt = $this->conn->prepare($query);
 
        // sanitize
        $this->sanitizeMe();
 
        // bind id of record to delete
        $stmt->bindParam(":id", $this->id);
 
        // execute the query
        return $stmt->execute();
    }
    
    // search profielen
    function search($filter)
    { 
        // select all query
        $query = "SELECT * FROM " . $this->table_name . " WHERE ";

        if (!is_null($filter->id)) {
            $query .= "id LIKE :id AND ";
        }
        if (!is_null($filter->familienaam)) {
            $query .= "familienaam LIKE :familienaam AND ";
        }
        if (!is_null($filter->voornaam)) {
            $query .= "voornaam LIKE :voornaam AND ";
        }
        if (!is_null($filter->geboortedatum)) {
            $query .= "geboortedatum LIKE :geboortedatum AND ";
        }
        if (!is_null($filter->email)) {
            $query .= "email LIKE :email AND ";
        }
        if (!is_null($filter->nickname)) {
            $query .= "nickname LIKE :nickname AND ";
        }
        if (!is_null($filter->beroep)) {
            $query .= "beroep LIKE :beroep AND ";
        }
        if (!is_null($filter->sexe)) {
            $query .= "sexe LIKE :sexe AND ";
        }
        if (!is_null($filter->haarkleur)) {
            $query .= "haarkleur LIKE :haarkleur AND ";
        }
        if (!is_null($filter->oogkleur)) {
            $query .= "oogkleur LIKE :oogkleur AND ";
        }
        if (!is_null($filter->grootte)) {
            switch ($filter->grootteOperator) {
                case "gt":
                    $query .= "grootte > :grootte AND ";
                    break;
                case "st":
                    $query .= "grootte < :grootte AND ";
                    break;
                case "eq":
                    $query .= "grootte = :grootte AND ";
                    break;
            }
        }
        if (!is_null($filter->gewichtOperator)) {
            switch ($filter->gewichtOperator) {
                case "gt":
                    $query .= "gewicht > :gewicht AND ";
                    break;
                case "st":
                    $query .= "gewicht < :gewicht AND ";
                    break;
                case "eq":
                    $query .= "gewicht = :gewicht AND ";
                    break;
            }
        }
        if (!is_null($filter->wachtwoord)) {
            $query .= "wachtwoord LIKE :wachtwoord AND ";
        }

        if (!is_null($filter->orderBy)) {
            $query .= "1=1 ORDER BY :orderBy ASC";
        }else{
            $query .= "1=1 ORDER BY id ASC";
        }


        /*
        echo $query;
        echo "#".$filter->orderBy."#";
        echo "#".$filter->grootteOperator."#";        
        return;
        */
 
        // prepare query statement
        $stmt = $this->conn->prepare($query);
 
        // sanitize
        $filter->sanitizeMe();
 
        // bind
        if (strpos($query, ':id') !== false) {
            $stmt->bindParam(":id", $filter->id);
        }
        if (strpos($query, ':familienaam') !== false) {
            $stmt->bindParam(":familienaam", $filter->familienaam);
        }
        if (strpos($query, ':voornaam') !== false) {
            $stmt->bindParam(":voornaam", $filter->voornaam);
        }
        if (strpos($query, ':geboortedatum') !== false) {
            $stmt->bindParam(":geboortedatum", $filter->geboortedatum);
        }
        if (strpos($query, ':email') !== false) {
            $stmt->bindParam(":email", $filter->email);
        }
        if (strpos($query, ':nickname') !== false) {
            $stmt->bindParam(":nickname", $filter->nickname);
        }
        if (strpos($query, ':beroep') !== false) {
            $stmt->bindParam(":beroep", $filter->beroep);
        }
        if (strpos($query, ':sexe') !== false) {
            $stmt->bindParam(":sexe", $filter->sexe);
        }
        if (strpos($query, ':haarkleur') !== false) {
            $stmt->bindParam(":haarkleur", $filter->haarkleur);
        }
        if (strpos($query, ':oogkleur') !== false) {
            $stmt->bindParam(":oogkleur", $filter->oogkleur);
        }
        if (strpos($query, ':grootte') !== false) {
            $stmt->bindParam(":grootte", $filter->grootte);
        }
        if (strpos($query, ':gewicht') !== false) {
            $stmt->bindParam(":gewicht", $filter->gewicht);
        }
        if (strpos($query, ':wachtwoord') !== false) {
            $stmt->bindParam(":wachtwoord", $filter->wachtwoord);
        }
        if (strpos($query, ':orderBy') !== false) {
            $stmt->bindParam(":orderBy", $filter->orderBy);
        }


        // execute query
        $stmt->execute();

        return $stmt;
    }
}

?>