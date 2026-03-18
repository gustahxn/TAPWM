namespace Empregado
{
    partial class frmMensalista
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lbl_matricula = new System.Windows.Forms.Label();
            this.lbl_nome = new System.Windows.Forms.Label();
            this.lbl_salario_mensal = new System.Windows.Forms.Label();
            this.lbl_data_entrada_empresa = new System.Windows.Forms.Label();
            this.tb_matricula = new System.Windows.Forms.TextBox();
            this.tb_nome = new System.Windows.Forms.TextBox();
            this.tb_salario_mensal = new System.Windows.Forms.TextBox();
            this.tb_data_entrada_empresa = new System.Windows.Forms.TextBox();
            this.btn_instanciar_mensalista = new System.Windows.Forms.Button();
            this.btn_instanciar_mensalista_passando_parametros = new System.Windows.Forms.Button();
            this.h1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // lbl_matricula
            // 
            this.lbl_matricula.AutoSize = true;
            this.lbl_matricula.Location = new System.Drawing.Point(143, 113);
            this.lbl_matricula.Name = "lbl_matricula";
            this.lbl_matricula.Size = new System.Drawing.Size(73, 20);
            this.lbl_matricula.TabIndex = 0;
            this.lbl_matricula.Text = "Matrícula";
            // 
            // lbl_nome
            // 
            this.lbl_nome.AutoSize = true;
            this.lbl_nome.Location = new System.Drawing.Point(143, 176);
            this.lbl_nome.Name = "lbl_nome";
            this.lbl_nome.Size = new System.Drawing.Size(51, 20);
            this.lbl_nome.TabIndex = 1;
            this.lbl_nome.Text = "Nome";
            // 
            // lbl_salario_mensal
            // 
            this.lbl_salario_mensal.AutoSize = true;
            this.lbl_salario_mensal.Location = new System.Drawing.Point(143, 241);
            this.lbl_salario_mensal.Name = "lbl_salario_mensal";
            this.lbl_salario_mensal.Size = new System.Drawing.Size(113, 20);
            this.lbl_salario_mensal.TabIndex = 2;
            this.lbl_salario_mensal.Text = "Salário Mensal";
            // 
            // lbl_data_entrada_empresa
            // 
            this.lbl_data_entrada_empresa.AutoSize = true;
            this.lbl_data_entrada_empresa.Location = new System.Drawing.Point(143, 302);
            this.lbl_data_entrada_empresa.Name = "lbl_data_entrada_empresa";
            this.lbl_data_entrada_empresa.Size = new System.Drawing.Size(173, 20);
            this.lbl_data_entrada_empresa.TabIndex = 3;
            this.lbl_data_entrada_empresa.Text = "Data Entrada Empresa";
            // 
            // tb_matricula
            // 
            this.tb_matricula.Location = new System.Drawing.Point(392, 106);
            this.tb_matricula.Name = "tb_matricula";
            this.tb_matricula.Size = new System.Drawing.Size(100, 26);
            this.tb_matricula.TabIndex = 4;
            // 
            // tb_nome
            // 
            this.tb_nome.Location = new System.Drawing.Point(392, 170);
            this.tb_nome.Name = "tb_nome";
            this.tb_nome.Size = new System.Drawing.Size(369, 26);
            this.tb_nome.TabIndex = 5;
            // 
            // tb_salario_mensal
            // 
            this.tb_salario_mensal.Location = new System.Drawing.Point(392, 235);
            this.tb_salario_mensal.Name = "tb_salario_mensal";
            this.tb_salario_mensal.Size = new System.Drawing.Size(186, 26);
            this.tb_salario_mensal.TabIndex = 6;
            // 
            // tb_data_entrada_empresa
            // 
            this.tb_data_entrada_empresa.Location = new System.Drawing.Point(392, 302);
            this.tb_data_entrada_empresa.Name = "tb_data_entrada_empresa";
            this.tb_data_entrada_empresa.Size = new System.Drawing.Size(186, 26);
            this.tb_data_entrada_empresa.TabIndex = 7;
            // 
            // btn_instanciar_mensalista
            // 
            this.btn_instanciar_mensalista.Location = new System.Drawing.Point(147, 404);
            this.btn_instanciar_mensalista.Name = "btn_instanciar_mensalista";
            this.btn_instanciar_mensalista.Size = new System.Drawing.Size(293, 156);
            this.btn_instanciar_mensalista.TabIndex = 8;
            this.btn_instanciar_mensalista.Text = "Instanciar Mensalista";
            this.btn_instanciar_mensalista.UseVisualStyleBackColor = true;
            this.btn_instanciar_mensalista.Click += new System.EventHandler(this.btn_instanciar_mensalista_Click);
            // 
            // btn_instanciar_mensalista_passando_parametros
            // 
            this.btn_instanciar_mensalista_passando_parametros.Location = new System.Drawing.Point(512, 404);
            this.btn_instanciar_mensalista_passando_parametros.Name = "btn_instanciar_mensalista_passando_parametros";
            this.btn_instanciar_mensalista_passando_parametros.Size = new System.Drawing.Size(303, 156);
            this.btn_instanciar_mensalista_passando_parametros.TabIndex = 9;
            this.btn_instanciar_mensalista_passando_parametros.Text = "Instanciar Mensalista Passando Parâmetros";
            this.btn_instanciar_mensalista_passando_parametros.UseVisualStyleBackColor = true;
            this.btn_instanciar_mensalista_passando_parametros.Click += new System.EventHandler(this.btn_instanciar_mensalista_passando_parametros_Click);
            // 
            // h1
            // 
            this.h1.AutoSize = true;
            this.h1.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.h1.Font = new System.Drawing.Font("Microsoft Sans Serif", 22F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.h1.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.h1.Location = new System.Drawing.Point(350, 22);
            this.h1.Name = "h1";
            this.h1.Size = new System.Drawing.Size(425, 52);
            this.h1.TabIndex = 10;
            this.h1.Text = "*** MENSALISTA ***";
            // 
            // frmMensalista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1183, 606);
            this.Controls.Add(this.h1);
            this.Controls.Add(this.btn_instanciar_mensalista_passando_parametros);
            this.Controls.Add(this.btn_instanciar_mensalista);
            this.Controls.Add(this.tb_data_entrada_empresa);
            this.Controls.Add(this.tb_salario_mensal);
            this.Controls.Add(this.tb_nome);
            this.Controls.Add(this.tb_matricula);
            this.Controls.Add(this.lbl_data_entrada_empresa);
            this.Controls.Add(this.lbl_salario_mensal);
            this.Controls.Add(this.lbl_nome);
            this.Controls.Add(this.lbl_matricula);
            this.Name = "frmMensalista";
            this.Text = "frmMensalista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lbl_matricula;
        private System.Windows.Forms.Label lbl_nome;
        private System.Windows.Forms.Label lbl_salario_mensal;
        private System.Windows.Forms.Label lbl_data_entrada_empresa;
        private System.Windows.Forms.TextBox tb_matricula;
        private System.Windows.Forms.TextBox tb_nome;
        private System.Windows.Forms.TextBox tb_salario_mensal;
        private System.Windows.Forms.TextBox tb_data_entrada_empresa;
        private System.Windows.Forms.Button btn_instanciar_mensalista;
        private System.Windows.Forms.Button btn_instanciar_mensalista_passando_parametros;
        private System.Windows.Forms.Label h1;
    }
}