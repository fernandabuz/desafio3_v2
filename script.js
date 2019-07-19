class Estado { //declarando a classe estado 
    constructor(sigla, nome, capital, regiao, bandeira) {
        this.sigla = sigla;
        this.nome = nome;
        this.capital = capital;
        this.regiao = regiao;
        this.bandeira = bandeira;
    }
}

var ac = new Estado('AC', 'Acre', 'Rio Branco', 'Norte', './imagens/bandeiraAC.png'); //criando um objeto para cada estado
var al = new Estado('AL', 'Alagoas', 'Maceió', 'Nordeste', './imagens/bandeiraAL.png');
var ap = new Estado('AP', 'Amapá', 'Macapá', 'Norte', './imagens/bandeiraAP.png');
var am = new Estado('AM', 'Amazonas', 'Manaus', 'Norte', './imagens/bandeiraAM.png');
var bh = new Estado('BA', 'Bahia', 'Salvador', 'Nordeste', './imagens/bandeiraBA.png');
var ce = new Estado('CE', 'Ceará', 'Fortaleza', 'Nordeste', './imagens/bandeiraCE.png');
var es = new Estado('ES', 'Espírito Santo', 'Vitória', 'Sudeste', './imagens/bandeiraES.png');
var go = new Estado('GO', 'Goiás', 'Goiânia', 'Centro-Oeste', './imagens/bandeiraGO.png');
var ma = new Estado('MA', 'Maranhão', 'São Luís', 'Nordeste', './imagens/bandeiraMA.png');
var mt = new Estado('MT', 'Mato Grosso', 'Cuiabá', 'Centro-Oeste','./imagens/bandeiraMT.png');
var ms = new Estado('MS', 'Mato Grosso do Sul', 'Campo Grande', 'Centro-Oeste', './imagens/bandeiraMS.png');
var mg = new Estado('MG', 'Minas Gerais', 'Belo Horizonte', 'Sudeste', './imagens/bandeiraMG.png');
var pa = new Estado('PA', 'Pará', 'Belém', 'Norte', './imagens/bandeiraPA.png');
var pb = new Estado('PB', 'Paraíba', 'João Pessoa', 'Nordeste', './imagens/bandeiraPB.png');
var pr = new Estado('PR', 'Paraná', 'Curitiba', 'Sul', './imagens/bandeiraPR.png');
var pe = new Estado('PE', 'Pernambuco', 'Recife', 'Nordeste', './imagens/bandeiraPE.png');
var pi = new Estado('PI', 'Piauí', 'Teresina', 'Nordeste', './imagens/bandeiraPI.png');
var rj = new Estado('RJ', 'Rio de Janeiro', 'Rio de Janeiro', 'Sudeste', './imagens/bandeiraRJ.png');
var rn = new Estado('RN', 'Rio Grande do Norte', 'Natal', 'Nordeste', './imagens/bandeiraRN.png');
var rs = new Estado('RS', 'Rio Grande do Sul', 'Porto Alegre', 'Sul', './imagens/bandeiraRS.png');
var ro = new Estado('RO', 'Rondônia', 'Porto Velho', 'Norte', './imagens/bandeiraRO.png');
var rr = new Estado('RR', 'Roraima', 'Boa Vista', 'Norte', './imagens/bandeiraRR.png');
var sc = new Estado('SC', 'Santa Catarina', 'Florianópolis', 'Sul', './imagens/bandeiraSC.png');
var sp = new Estado('SP', 'São Paulo', 'São Paulo', 'Sudeste', './imagens/bandeiraSP.png');
var se = new Estado('SE', 'Sergipe', 'Aracaju', 'Nordeste', './imagens/bandeiraSE.png');
var to = new Estado('TO', 'Tocantins', 'Palmas', 'Norte', './imagens/bandeiraTO.png');

var listaEstado = new Array(); //criando uma lista (array) com os objetos
listaEstado.push(ac, al, ap, am, bh, ce, es, go, ma, mt, ms, mg, pa, pb, pr, pe, pi, rj, rn, rs, ro, rr, sc, sp, se, to);