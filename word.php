<?php
/*
class Word extends ZipArchive{
    
        // Файлы для включения в архив
        private $files;
    
        // Путь к шаблону
        public $path;
    
        public function __construct($filename, $template_path = 'C:\\Apache24\\htdocs\\' ){
    
          // Путь к шаблону
          $this->path = $template_path;
    
          // Если не получилось открыть файл, то жизнь бессмысленна.
          if ($this->open($filename, ZIPARCHIVE::CREATE) !== TRUE) {
            die("Unable to open <$filename>\n");
          }
    
    
          // Структура документа
          $this->files = array(
            "word/_rels/document.xml.rels",
            "word/theme/theme1.xml",
            "word/fontTable.xml",
            "word/settings.xml",
            "word/styles.xml",
            "word/document.xml",
            "word/stylesWithEffects.xml",
            "word/webSettings.xml",
            "_rels/.rels",
            "docProps/app.xml",
            "docProps/core.xml",
            "[Content_Types].xml" );
    
          // Добавляем каждый файл в цикле
          foreach( $this->files as $f )
            $this->addFile($this->path . $f , $f );
        }
    
        // Упаковываем архив
        public function create(){
    
          $this->close();
        }
    }
    
    
    $w = new Word( "t.docx" );
    
    $w->create();*/
/*
    $zip = new ZipArchive;
    $res = $zip->open('t.docx');
    if ($res === TRUE) {
        echo 'ok';
        $zip->extractTo('temp');
        $zip->close();
    } else {
        echo 'failed, code:' . $res;
    }

if (file_exists("temp/word/document.xml")) {
    $xml = simplexml_load_file("temp/word/document.xml");
 
    print_r($xml);
    $xml->street[]
    echo $xml->asXML();
} else {
    exit('Не удалось открыть файл test.xml.');
}
$zip = new ZipArchive;
$res = $zip->open('t.docx');
//if (($index =  $zip->LocateName ("word/document.xml") !== false))
    $data = $zip->getFromName ("word/document.xml");
    //getFromIndex ($index);
    $xml = simplexml_load_string ($data);
    echo "into if";
    echo $xml;*/



/*
$template = fopen ("temp/word/document.xml", "r+");
$text = fread ($template, filesize ("temp/word/document.xml"));
fclose ($template);
echo $text;*/




    /*    $document = file ("temp/word/document.xml");
    foreach ($document as $key => $value) {
        echo "index: $key , value: $value <br />";
    }


    $zip = new ZipArchive;
    $res = $zip->open('test.zip', ZipArchive::CREATE);
    if ($res === TRUE) {
        $zip->addFile('document.xml', 'document.xml');
        $zip->close();
        echo 'ok';
    } else {
        echo 'failed';
    }*/

    require 'vendor/autoload.php';
    /*require_once "PHPWord\Autoloader.php";
    PHPWord_Autoloader::register();*/
    $PHPWord = new \PhpOffice\PhpWord\PhpWord();
    /*$document = $PHPWord->loadTemplate('t.docx'); //шаблон
    $document->setValue('name1', 'Жопкин'); //номер договора
    
    $document->setValue('state', 'Кукуево'); //дата договора

    $document->setValue('district', 'Цемдолина'); //фамилия

    $document->setValue('street', 'Ленина');// имя

    $document->setValue('name2', 'Васильевич');// отчество
    
    $document->setValue('address2', 'KJH');// отчество  
    $document->setValue('kadastr', '0011111:124');// отчество */
    //$section = $PHPWord->createSection(array('borderColor' => '00FF00', 'borderSize' => 14));
    $section = $PHPWord->createSection( array ('marginLeft'=> 350));
    $text = "На Ваш запрос";
    
    $fontStyle = array('name'=>'Times new Roman', 'size'=>14);
    
    $parStyle = array('align'=>'left','spaceBefore'=>10);

     

    $section->addText(htmlspecialchars($text), $fontStyle,$parStyle);
    // $section->addText('I am placed on a default section.');

    //$section->addText("HELLLLLO!!!!!!!!!!!");
     $writer = \PhpOffice\PhpWord\IOFactory::createWriter($PHPWord, 'Word2007');

     $writer->save('filename.docx');
    
/*
    $document->save('Template_full.docx'); //имя заполненного шаблона

     */

?>