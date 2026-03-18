using System;
using System.Collections.Generic;
using System.Linq;
using System.Media;
using System.Text;
using System.Threading.Tasks;

namespace Empregado
{
    abstract internal class Empregado
    {
        private int matricula;
        private string nomeEmpregado;
        private DateTime dataEntradaEmpresa;

        public int Matricula //Propriedade
        {
            get { return matricula; }
            set { matricula = value; }
        }
        public string NomeEmpregado
        {
            get { return nomeEmpregado; }
            set { nomeEmpregado = value; }
        }
        public DateTime DataEntradaEmpresa
        {
            get { return dataEntradaEmpresa; }
            set { dataEntradaEmpresa = value; }

        }


        //métodos
        public virtual int TempoTrabalho()
        {
            //intervalo de tempo
            TimeSpan span =
                DateTime.Today.Subtract(DataEntradaEmpresa);
            return (span.Days);
        }
        public abstract double SalarioBruto();

        public Empregado() //construtor
        {
            System.Windows.Forms.MessageBox.Show("aqui é Empregado");
        }


    }

}
