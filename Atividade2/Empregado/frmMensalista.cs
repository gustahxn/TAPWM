using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Empregado
{
    public partial class frmMensalista : Form
    {
        public frmMensalista()
        {
            InitializeComponent();
        }

        private void btn_instanciar_mensalista_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista();

            //set
            objMensalista.NomeEmpregado = tb_nome.Text;
            objMensalista.Matricula = Convert.ToInt32(tb_matricula.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(tb_data_entrada_empresa.Text);
            objMensalista.SalarioMensal = Convert.ToDouble(tb_salario_mensal.Text);


            //get
            MessageBox.Show("Nome = " + objMensalista.NomeEmpregado + "\nMatrícula = " + objMensalista.Matricula + "\nTempo Trabalho = " + objMensalista.TempoTrabalho() + "\nSalário Final = " + objMensalista.SalarioBruto().ToString("N2"));
        }

        private void btn_instanciar_mensalista_passando_parametros_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista
                (
                Convert.ToInt16(tb_matricula.Text),
                tb_nome.Text, 
                Convert.ToDateTime(tb_data_entrada_empresa.Text),
                Convert.ToDouble(tb_salario_mensal.Text)
                );

            MessageBox.Show("Nome = " + objMensalista.NomeEmpregado + 
                "\nMatrícula = " + objMensalista.Matricula + 
                "\nTempo Trabalho = " + objMensalista.TempoTrabalho() +
                "\nSalário Final = " + objMensalista.SalarioBruto().ToString("N2"));
        }
    }

}
