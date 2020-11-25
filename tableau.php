<?php
include_once __DIR__ . '/Car.php';
$renault = new Car();
$renault->setMarque('renault')->setModel('clio');

$renault2 = new Car();
$renault2->setMarque('renault')->setModel('megane');

$renault3 = new Car();
$renault3->setMarque('renault')->setModel('twingo');

$peugeot = new Car();
$peugeot->setMarque('peugeot')->setModel('3008');

$peugeot2 = new Car();
$peugeot2->setMarque('peugeot')->setModel('208');

$peugeot3 = new Car();
$peugeot3->setMarque('peugeot')->setModel('308');

$fiat = new Car();
$fiat->setMarque('fiat')->setModel('tipo');

$fiat2 = new Car();
$fiat2->setMarque('fiat')->setModel('500');

$fiat3 = new Car();
$fiat3->setMarque('fiat')->setModel('panda');


$voiture = [$renault, $renault2, $renault3, $peugeot, $peugeot2, $peugeot3, $fiat, $fiat2, $fiat3];
$modele = [];
foreach ($voiture as $value) {
    if (
        isset($_GET['marque']) && $_GET['marque'] == $value->marque && !isset($_GET['modele'])
    ) {
        $modele[] = $value;
    } elseif (
        isset($_GET['marque']) && $_GET['marque'] == $value->marque
        && isset($_GET['modele']) && $_GET['modele'] == $value->model
    ) {
        $modele[] = $value;
    }
}
if (
    !empty($modele) && isset($_GET['marque'])

) {
    echo json_encode($modele);
} elseif (
    !empty($modele) && isset($_GET['affiche']) && $_GET['affiche'] == 'tableau'
    || !empty($modele) && isset($_GET['affiche']) && $_GET['affiche'] == 'tableau'
    && isset($_GET['modele']) && isset($_GET['marque'])
) {
    echo json_encode($modele);
} else {
    echo json_encode($voiture);
}
