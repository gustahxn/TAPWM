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
    public partial class frmHorista : Form
    {
        public frmHorista()
        {
            InitializeComponent();
        }

        private void btn_instanciar_horista_Click(object sender, EventArgs e)
        {
            Horista objHorista = new Horista();
            objHorista.NomeEmpregado = tb_nome.Text;
            objHorista.Matricula = Convert.ToInt32(tb_matricula.Text);
            objHorista.SalarioHora = Convert.ToDouble(tb_salario_hora.Text);
            objHorista.NumeroHora = Convert.ToDouble(tb_numero_horas.Text);
            objHorista.DataEntradaEmpresa = Convert.ToDateTime(tb_data_entrada_empresa.Text);
            objHorista.DiasFalta = Convert.ToInt32(tb_faltas.Text);

            //get
            MessageBox.Show("Nome = " + objHorista.NomeEmpregado + "\nMatrícula = " + 
                objHorista.Matricula +
                "\nTempo Trabalho = " + objHorista.TempoTrabalho() + 
                "\nSalário Final = " +
                objHorista.SalarioBruto().ToString("N2"));
        }
    }
}
