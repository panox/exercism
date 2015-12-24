var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(nucleotide) {

    var map = {
        C:"G",
        G:"C",
        A:"U",
        T:"A"
    };

    Rna = nucleotide.replace(/G|C|T|A/g, function(matched){
        return map[matched];
    });
    return Rna;
};

module.exports = DnaTranscriber;
